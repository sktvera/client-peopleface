import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Timeline from "../../Components/Timeline/Timeline";

import "./Assets/styles.css"

const Homepage =()=> {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
