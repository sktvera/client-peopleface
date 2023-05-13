import React, {  useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar} from "@mui/material";
import LogoWhite from './Assets/Img/LogoWhite.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLocation} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import { useNavigate} from 'react-router-dom'


import "./Assets/styles.css"


const Sidenav =({dataProfile})=> {


  const navigate = useNavigate()
  const location = useLocation();

  const feedPosts = dataProfile.feedPosts ?? [];

  const [openOrClose, setOpenOrClose] = useState(false);
  const [openCreate, setopenCreate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [saveData, setSaveData ] = useState([])
  const [openProfile, setOpenProfile ] = useState(false)
  const [openMessages, setOpenMessages ] = useState(false)

  
    const [formTask, setFormTask ] = useState({})
    const handleFormTask = (event) => {
      const value = event.target.value
      setFormTask({...formTask,
      [event.target.name]:value
    })
  }
 
  const hanldeSubmitForm = async () => {
    const url = "http://localhost:3000/api/feed";
    const data = { body: formTask.body };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${location.state.logged}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
  
      const responseData = await response.json();
     
      setSaveData(responseData);
      if (saveData.length !== 0) {
        setopenCreate(!openCreate);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleScaleClose = () => {
    setopenCreate(false);
  };
  const handleScaleOpen=()=>{
      setopenCreate(true)
      setOpenOrClose(!openOrClose)
  };
  const handleCloseProfile = () => {
    setOpenProfile(false);
  };
  const handleOpenProfile=()=>{
      setOpenProfile(true)
      setOpenOrClose(!openOrClose)
  };
  const handleCloseMessage = () => {
    setOpenMessages(false);
  };
  const handleOpenMessage=()=>{
      setOpenMessages(true)
      setOpenOrClose(!openOrClose)
  };

  const handleTextAreaClick = (event) => {
    event.stopPropagation();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleLogout = ()=>{ 
    localStorage.clear();
    navigate('/Login')
  }

  return (
<div className="sidenav">
    <img
    className="sidenav__logo"
    src={LogoWhite}
    alt="People Face"
    />
    {openOrClose === true ? 
        <div className="sidenav__buttons">
            <button onClick={()=>{setOpenProfile(!openProfile)}} className="sidenav__button">
                <AccountCircleIcon />
                <span>
                  Perfil
                </span>
            </button>
            <button onClick={()=>{setOpenMessages(!openMessages)}} className="sidenav__button">
                <ChatIcon />
                <span>
                  Mensajes
                </span>
            </button>
            <button 
                onClick={handleScaleOpen}
                className="sidenav__button">
                <AddCircleOutlineIcon />
                <span>
                  Create
                </span>
            </button>
            <button className="sidenav__button">
                    <Avatar style={{ marginRight: "10px" }}>
                    {dataProfile.firstName.charAt(0).toUpperCase()}
                    </Avatar>{" "}
                <span>
                    <button onClick={handleLogout}  className="logout__button">
                        Logout
                    </button>
                </span>
            </button>
        </div>
    :
    null
    }
      <div className="sidenav__more">
            <button onClick={()=>setOpenOrClose(!openOrClose)} className="sidenav__button">
                <MenuIcon />
                <span className="sidenav__buttonText">More</span>
            </button>
      </div>

{/*---------------------- MODALS-------------------------*/}

    {openCreate ?
      <Modal
      open={handleScaleOpen}
      onClose={handleScaleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
            <Box className='modal'>
                <div>
                    <div className='cardModal'>
                        <div className='bodyCardModal'>
                            <div className='CardModalContent'>
                                <div className='text-CardModalContent'>
                                    <p>Crear una publicación</p>
                                </div>
                            </div> 
                            <div className='CardModalContent textAndProfile'>
                                <div className='infoProfile'>
                                    <Avatar style={{ marginRight: "10px" }}>
                                        {dataProfile.firstName.charAt(0).toUpperCase()}
                                    </Avatar>{" "}
                                    <div className='fullnameCreate'>
                                        <p>{dataProfile.firstName} {dataProfile.lastName}</p>
                                    </div>
                                </div>
                                <div className='textContent'>
                                    <textarea
                                    autoFocus
                                    onFocus={handleTextAreaClick} 
                                    onChange={handleFormTask}
                                    name="body"
                                    placeholder='¿Sobre que quieres hablar?'/>
                                </div>
                                <div className='addFile'>
                                    <Button
                                    type="submit"
                                    onClick={hanldeSubmitForm} 
                                    variant="outlined">
                                    Publicar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
    </Modal>
    :null}   

    {openProfile ?
      <Modal
      open={handleOpenProfile}
      onClose={handleCloseProfile}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
            <Box className='modal'>
                <div>
                    <div className='cardModalProfile'>
                        <div className='bodyCardModalProfile'>
                            <div className='iconAndNameEmial'>
                              <div className='icon'> 
                                  <Avatar
                                   sx={{ width: 64, height: 64 }}
                                   >
                                      {dataProfile.firstName.charAt(0).toUpperCase()}
                                  </Avatar>{" "}
                                </div>
                              <div className='containedTittle'>
                                <div className='fullname'>
                                <p>{dataProfile.firstName} {dataProfile.lastName}</p>
                                </div>
                                <div><p>{dataProfile.email}</p></div>
                              </div>
                            </div>
                            <div className='feedPosts'>
                            {feedPosts.map((postProfile)=>{
                             const newTimestamp = new Date(postProfile.createdAt).toLocaleString();
                              return(
                                <div className='profileFeed'>
                                  <div className='profileFeed-item'>{dataProfile.firstName}</div>
                                  <div>{postProfile.body}</div>
                                  <div className='profileFeed-item'>{newTimestamp}</div>
                                </div>
                              )
                            })}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Box>
    </Modal>
    :null}      

    {openMessages ?
     <Modal
     open={handleOpenMessage}
     onClose={handleCloseMessage}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
     >
           <Box className='modal'>
               <div>
                   <div className='cardModal'>
                       <div className='bodyCardModal'>
                         
                           <div>item</div>
                           <div>item</div>
                       </div>
                   </div>
               </div>
           </Box>
   </Modal>
    :null}    
</div>
   
  );
}

export default Sidenav;
