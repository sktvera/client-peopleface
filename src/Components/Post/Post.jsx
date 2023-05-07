import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import "./Assets/styles.css"

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
           
          </Avatar>
         
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
       
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by  people.
      </div>
    </div>
  );
}

export default Post;
