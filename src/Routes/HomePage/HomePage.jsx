import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Timeline from "../../Components/Timeline/Timeline";
import { Hidden } from '@mui/material';

import "./Assets/styles.css"

const Homepage =()=> {
  return (
   <div className="container-homepage">
     <div className="homepage">
     <Hidden only={['xs','sm']}>
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
     </Hidden>
      <div className="homepage__timeline">
        <Timeline />
      </div>
     
    </div>
   </div>
  );
}

export default Homepage;
