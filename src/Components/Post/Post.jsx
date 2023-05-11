import React, { useState } from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TextField from '@mui/material/TextField';

import "./Assets/styles.css"

function Post({timestamp, body, user}) {
 
  const newTimestamp = new Date(timestamp).toLocaleString();

  const [openComments, setOpenComments ] = useState(false)
  const [openSettings, setOpenSettings ] = useState(false)


  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
        <Avatar style={{ marginRight: "10px" }}>
            {user.firstName.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user.firstName} {user.lastName} • <span>{newTimestamp}</span>
        
        </div>
      <div className="settingsPost">
      <MoreHorizIcon onClick={()=>{setOpenSettings(!openSettings)}}/>
      </div>
        
       
      </div>
      <div className="post__image">
       <p>{body}</p>
      </div>
      {
      openComments=== true?
      <div className='textComment'>
          <div className='tittleComments'>
              <p>Que estas pensando?</p>
          </div>
          <div>
              <TextField
              margin="normal"
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              />
          </div>
          <button  className="logout__button">
              Publicar
          </button>
      </div>:null
      }
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
        Liked by  people.
      </div>

      {openSettings==true?
      <div>
        <div>
          <div></div>
        </div>
      </div>
      :null
    }
    </div>
  );
}

export default Post;
