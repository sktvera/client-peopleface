import React, {  useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
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




import axios from 'axios'

import "./Assets/styles.css"


const Sidenav =()=> {

  const location = useLocation();

  
  const [openOrClose, setOpenOrClose] = useState(false);
  const [openCreate, setopenCreate] = useState(false);

  const handleScaleClose = () => {
    setopenCreate(false);
    }
    const handleScaleOpen=()=>{
      setopenCreate(true)
      setOpenOrClose(!openOrClose)
    }
    const [formTask, setFormTask ] = useState({})
    const handleFormTask = (event) => {
      const value = event.target.value
      setFormTask({...formTask,
      [event.target.name]:value
    })
  }
 
console.log(formTask.body)

  
  const [saveData, setSaveData ] = useState([])
 
    const hanldeSubmitForm = async ()=>{
      const url = "http://localhost:3000/api/feed";
      const result = await axios.post(url,
        {
          "body":`${formTask.body}` // Reemplaza 'Mi descripción' con la descripción real que deseas enviar
        }, {
          headers: {
            'Authorization': `Bearer ${location.state.logged}`, // Reemplaza 'tu_token' con el token real
            'Content-Type': 'applicaion/json'
          }
        }
      
      );
        setSaveData(result.data) 
    
        if(saveData.length !== 0){
          setopenCreate(!openCreate)
        }
        
     }
     
  const handleTextAreaClick = (event) => {
    event.stopPropagation();
  };



  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

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
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button 
        onClick={handleScaleOpen}
        className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          <Avatar>
            
          </Avatar>
          <span>
            <button  className="logout__button">
              Logout
            </button>
          </span>
        </button>
      </div>:
      null
}

      <div className="sidenav__more">
        <button onClick={()=>setOpenOrClose(!openOrClose)} className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
      
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
                                        <Avatar>J</Avatar>
                                    <div>
                                          <p>julian david vera godoy</p>
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
                                    

<div className="file-input">
      <label htmlFor="file-upload" className="file-upload-label">
        <FontAwesomeIcon icon={faFile} className="file-upload-icon" />
        Seleccionar imagen
      </label>
   
      <input
      id="file-upload"
      type="file"
      accept="image/*"
      onChange={handleFileChange}
    />
      {selectedFile && <p>Imagen seleccionada: {selectedFile.name}</p>}
    </div>

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
      

    </div>
   
  );
}

export default Sidenav;
