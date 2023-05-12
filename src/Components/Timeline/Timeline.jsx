import React, { useEffect, useState } from 'react'
import Post from "../../Components/Post/Post";
import Suggestions from "../../Components/Suggestions/Suggestions";
import { Hidden } from '@mui/material';
import { useLocation} from 'react-router';
import axios from 'axios'

import "./Assets/styles.css"

function Timeline({dataProfile}) {

  const location = useLocation();
  const [saveData, setSaveData ] = useState([])

  useEffect(()=> {
    const hanldeSubmitForm = async ()=>{
      const url = "http://localhost:3000/api/feed/all";
      const result = await axios.get(url,
       {
          headers: {
            'Authorization': `Bearer ${location.state.logged}`, // Reemplaza 'tu_token' con el token real
            'Content-Type': 'applicaion/json'
          }
        });
        setSaveData(result.data) 
     }
     hanldeSubmitForm()
     },[saveData]);


  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {saveData.map((post) => (
            <Post
              dataProfile={dataProfile}
              user={post.author}
              postImage={post.postImage}
              idPost={post.id}
              timestamp={post.createdAt}
              body={post.body}
            />
          ))
          }
        </div>
      </div>
      <Hidden only={['xs','sm','md']}>
      <div className="timeline__right scroll">
        <Suggestions />
      </div>
      </Hidden>
    </div>
  );
}

export default Timeline;
