import { Avatar } from "@mui/material";
import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router';
import './Assets/styles.css'

const Comments= ({idPost})=>{

const location = useLocation();

const [datagetComments, setDatagetComments ] = useState([])
const [userComment, setUserComment ] = useState([])
    
    
     useEffect(() => {
        const handleGetComments = async () => {
          const url = `http://localhost:3000/api/comment`;
      
          try {
            const response = await fetch(url, {
              headers: {
                'Authorization': `Bearer ${location.state.logged}`,
                'Content-Type': 'application/json'
              }
            });
      
            if (response.ok) {
              const data = await response.json();
              const searchComments = data.find((value) => value.feedPostId === idPost);
              if (searchComments) {
                setDatagetComments({
                  id: searchComments.id,
                  comment: searchComments.body,
                  user: searchComments.authorId
                });
              }
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        handleGetComments();
      }, [datagetComments]);
      
    useEffect(() => {
        const handleUserComment = async () => {
          const url = `http://localhost:3000/api/user/${datagetComments.user}`;
      
          try {
            const response = await fetch(url, {
              headers: {
                'Authorization': `Bearer ${location.state.logged}`,
                'Content-Type': 'application/json'
              }
            });
      
            if (response.ok) {
              const data = await response.json();
              setUserComment(data);
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        handleUserComment();
      }, [userComment]);


  
    return(
  
                <div className='containedComments'>
                    <div className='iconComment'> 
                        <Avatar 
                         sx={{ width: 30, height: 30 }}
                        style={{ marginRight: "10px" }}
                        >
                        {userComment.firstName.charAt(0).toUpperCase()}
                        </Avatar>{" "}
                    </div>
                    <div className='nameAndComment'>
                        <div className='infoUserComment'>
                           <div className='commnentName'> {userComment.firstName} {userComment.lastName}</div>
                           <div className='commentEmail'> {userComment.email}</div>
                        </div>
                        <div className='commentBody'>
                            {datagetComments.comment}
                        </div>
                    </div>
                </div>
              
    )
}

export default Comments;