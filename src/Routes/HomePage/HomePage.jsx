import React, { useEffect, useState } from 'react'
import Sidenav from "../../Components/Sidenav/Sidenav";
import Timeline from "../../Components/Timeline/Timeline";
import { Hidden } from '@mui/material';
import {  useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import "./Assets/styles.css"

const Homepage =()=> {

  const navigate = useNavigate()

  const location = useLocation();
  const [saveData, setSaveData ] = useState([])
  useEffect(()=> {
    const hanldeSubmitForm = async ()=>{
      const url = `http://localhost:3000/api/user/${location.state.userId}`;
      const result = await axios.get(url,
       {
          headers: {
            'Authorization': `Bearer ${location.state.logged}`, 
            'Content-Type': 'applicaion/json'
          }
        });
        setSaveData(result.data) 
    
     }
     hanldeSubmitForm()
     },[saveData]);

    

     const [items, setItem ] = useState()
     
     useEffect(() => {
  
      localStorage.setItem('items', `${location.state.userId}`);
    }, [items]);
    

  return (
   <div className="container-homepage">
    <NavbarMobile/>
     <div className="homepage">
     <Hidden only={['xs','sm']}>
      <div className="homepage__navWraper">
        <Sidenav dataProfile={saveData} />
      </div>
     </Hidden>
      <div className="homepage__timeline">
        <Timeline dataProfile={saveData} />
      </div>
    </div>
   </div>
  );
}

export default Homepage;
