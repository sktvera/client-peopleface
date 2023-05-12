import React, { useEffect, useState } from 'react'
import { Avatar } from "@mui/material";
import axios from 'axios'

import "./Assets/styles.css"

function Suggestions() {

  const [saveData, setSaveData ] = useState([])
  useEffect(()=> {
    const hanldeSubmitForm = async ()=>{
      const url = "http://localhost:3000/api/auth/all";
      const result = await axios.get(url,
       );
        setSaveData(result.data) 
     }
     hanldeSubmitForm()
     },[saveData]);

  return (
      <div className="suggestions">
      <div className="suggestions__title">Sugerencias para ti</div>
          <div className="suggestions__usernames">
              {saveData.map((users)=>{
              return(
                  <div className="suggestions__username">
                      <div className="username__left">
                          <span className="avatar">
                          <Avatar> {users.firstName.charAt(0).toUpperCase()}</Avatar>
                          </span>
                          <div className="username__info">
                              <span className="username">{users.firstName}</span>
                              <span className="relation">nuevo en PeopleFace</span>
                          </div>
                      </div>
                      <button className="follow__button">Follow</button>
                  </div>
              )})}
          </div>
      </div>
  );
}

export default Suggestions;
