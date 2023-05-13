import React, {  useEffect ,useState } from 'react'
import LogoWhiteMobile from './Assets/Img/LogoWhiteMobile.png'
import { Avatar} from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import { useLocation} from 'react-router';
import { useNavigate} from 'react-router-dom'
import './Assets/styles.css'

const NavbarMobile =({dataProfile})=> {

    const feedPosts = dataProfile.feedPosts ?? [];
    const navigate = useNavigate()
   /*  const location = useLocation(); */

    const [openOrClose, setOpenOrClose] = useState(false);
    /* const [openCreate, setopenCreate] = useState(false); */
    const [openProfile, setOpenProfile ] = useState(false)
    const [openMessages, setOpenMessages ] = useState(false)
   /*  const [saveData, setSaveData ] = useState([])

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
        console.log(responseData);
        setSaveData(responseData);
        if (saveData.length !== 0) {
          setopenCreate(!openCreate);
        }
      } catch (error) {
        console.error(error);
      }
    };

   
       */
    const handleScaleClose = () => {
       /*  setopenCreate(false); */
      };
      const handleScaleOpen=()=>{
        /* setopenCreate(true) */
        /* setOpenOrClose(!openOrClose) */
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
    
    /*   const handleTextAreaClick = (event) => {
        event.stopPropagation();
      }; */

      const handleLogout = ()=>{ 
        localStorage.clear();
        navigate('/Login')
      }
    
   

  return (
<div className='containedNavbarMobile'>
   
<img
        className="NavbarMobile__logo"
        src={LogoWhiteMobile}
        alt="People Face"
        />
       
                <div className='containedButtons'>
             
                    <div onClick={()=>{setOpenProfile(!openProfile)}} className="NavbarMobile">
                        <AccountCircleIcon />
                        <span>
                            Perfil
                        </span>
                    </div>
               
              
                    <div onClick={()=>{setOpenMessages(!openMessages)}} className="NavbarMobile">
                        <ChatIcon />
                        <span>
                            Chat
                        </span>
                    </div>
               
             
                    <div 
                    onClick={handleScaleOpen}
                    className="NavbarMobile">
                        <AddCircleOutlineIcon />
                        <span>
                            Crear
                        </span>
                    </div>
               
               
                    <div className="NavbarMobile NavbarMobile-logout">
                        <Avatar style={{ marginRight: "10px" }}>
                        {dataProfile.firstName.charAt(0).toUpperCase()}
                        </Avatar>{" "}
                        <div className='handleLogout' onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
               
                    <div 
                    onClick={handleScaleOpen}
                    className="NavbarMobile">
                        <MenuIcon />
                       
                    </div>
                    <div 
                    onClick={handleScaleOpen}
                    className="NavbarMobile">
                        <SupervisedUserCircleIcon />
                        <span>
                            users
                        </span>
                    </div>
                </div>
      
                
 

{/*-------------------- MODALS  ----------------------------*/}

{/* {openCreate ?
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
    :null}    */}


{openProfile ?
      <Modal
      open={handleOpenProfile}
      onClose={handleCloseProfile}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
            <Box className='modal-mobile'>
              
                    <div className='cardModalProfile-mobile'>
                        <div className='bodyCardModalProfile-mobile'>
                            <div className='iconAndNameEmial'>
                              <div className='icon'> 
                                  <Avatar
                                   sx={{ width: 64, height: 64 }}
                                   >
                                      {dataProfile.firstName.charAt(0).toUpperCase()}
                                  </Avatar>{" "}
                                </div>
                              <div className='containedTittle-mobile'>
                                <div className='fullname-mobile'>
                                <p>{dataProfile.firstName} {dataProfile.lastName}</p>
                                </div>
                                <div><p>{dataProfile.email}</p></div>
                              </div>
                            </div>
                            <div className='feedPosts-mobile'>
                            {feedPosts.map((postProfile)=>{
                             const newTimestamp = new Date(postProfile.createdAt).toLocaleString();
                              return(
                                <div className='profileFeed-mobile'>
                                  <div className='profileFeed-item-mobile'>{dataProfile.firstName}</div>
                                  <div>{postProfile.body}</div>
                                  <div className='profileFeed-item-mobile'>{newTimestamp}</div>
                                </div>
                              )
                            })}
                            </div>
                            
                        </div>
                    </div>
              
            </Box>
    </Modal>
    :null}   

</div>
  )
}

export default NavbarMobile