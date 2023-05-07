import React, { useState } from 'react';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import LogoWhite from './Assets/Img/LogoWhite.png'



import "./Assets/styles.css"

const Sidenav =()=> {


  const [openOrClose, setOpenOrClose] = useState(false);

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
        <button className="sidenav__button">
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
      
    </div>
   
  );
}

export default Sidenav;
