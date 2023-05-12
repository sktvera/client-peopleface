import React, { useState } from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TextField from '@mui/material/TextField';
import { useLocation} from 'react-router';
import axios from 'axios'

import "./Assets/styles.css"

function Post({timestamp, body, user, dataProfile,idPost}) {


  const location = useLocation();
 
  const newTimestamp = new Date(timestamp).toLocaleString();

  const [openComments, setOpenComments ] = useState(false)
  const [openSettings, setOpenSettings ] = useState(false)
  const [openUpdate, setOpenUpdate ] = useState(false)
  const [saveData, setSaveData ] = useState([])
  const [saveDataUpdate, setSaveDataUpdate ] = useState([])
  const [formUpdate, setFormUpdate ] = useState({"body":body})

  const habdledelete = async()=>{
    const url = `http://localhost:3000/api/feed/${idPost}`;
      const result = await axios.delete(url,
       {
          headers: {
            'Authorization': `Bearer ${location.state.logged}`, // Reemplaza 'tu_token' con el token real
            'Content-Type': 'applicaion/json'
          }
        });
        setSaveData(result.data) 
        setOpenSettings(!openSettings)
  }
const handleClose=()=>{
    setOpenUpdate(!openUpdate)
}

const handleUpdate = (event) => {
  const value = event.target.value
  setFormUpdate({...formUpdate,
  [event.target.name]:value})
}
const handleUpdateApi = async()=>{
    const url = `http://localhost:3000/api/feed/${idPost}`;
      const result = await axios.put(url,
        {
            "body": formUpdate.body
        },
       {
          headers: {
            'Authorization': `Bearer ${location.state.logged}`, // Reemplaza 'tu_token' con el token real
            'Content-Type': 'applicaion/json'
          }
        });
        setSaveDataUpdate(result.data) 
        setOpenUpdate(!openUpdate)
    }



  return(
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                    <Avatar style={{ marginRight: "10px" }}>
                    {user.firstName.charAt(0).toUpperCase()}
                    </Avatar>{" "}
                    {user.firstName} {user.lastName} • <span>{newTimestamp}</span>
                </div>
                <div className="settingsPost">
                    {dataProfile.id === user.id?
                    <MoreHorizIcon onClick={()=>{setOpenSettings(!openSettings)}}/>
                    :
                    null}
                </div>
            </div>
            <div className="post__image">
                {openUpdate === true?
                <div className='textComment'>
                    <div className='tittleComments'>
                        <p>Que estas pensando?</p>
                    </div>
                    <div>
                        <TextField
                        onChange={handleUpdate}
                        margin="normal"
                        fullWidth
                        name="body"
                        value={formUpdate.body}
                        autoFocus
                        />
                    </div>
                    <div className='buttonsUpdate'>
                        <button onClick={handleUpdateApi}  className="logout__button">
                            Publicar
                        </button>
                        <button onClick={handleClose} className="logout__button">
                            Descartar
                        </button>
                    </div>
                </div>
                :
                <div className='descriptionFeed'><p>{body}</p></div>
                }
            </div>
            {openComments=== true?
            <div className='textComment'>
                <div className='tittleComments'>
                    <p>Que estas pensando?</p>
                </div>
                <div>
                    <TextField
                    margin="normal"
                    fullWidth
                    name="body"
                    autoComplete="email"
                    
                    autoFocus
                    />
                </div>
                <button  className="logout__button">
                    Publicar
                </button>
            </div>
            :
            null}
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorderIcon className="postIcon settingsPost" />
                        <ChatBubbleOutlineIcon onClick={()=>{setOpenComments(!openComments)}} className="postIcon settingsPost" />
                        <TelegramIcon className="postIcon settingsPost" />
                    </div>
                    <div className="post__iconSave settingsPost">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
            
            </div>
            {openSettings==true?
                <div className='bodyModalSettings'>
                    <div className='bodyModalSettings-contained'>
                        <div onClick={()=>[setOpenUpdate(!openUpdate),setOpenSettings(!openSettings)]} className='item-settings'>
                            <p>Actualizar</p>
                        </div>
                        <div onClick={habdledelete} className='item-settings'>
                            <p>Eliminar</p>
                        </div>
                    </div>
                </div>
            :null
            }
        </div>
  );
}

export default Post;
