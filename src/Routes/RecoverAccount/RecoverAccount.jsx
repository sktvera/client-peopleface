import React from 'react'
import RecoverAccountBody from '../../Components/RecoverAccountBody/RecoverAccountBody'
import Navbar from '../../Components/Navbar/Navbar'
 
import "./Assets/styles.css"


const RecoverAccount = () => {

    return(
        <div>
            <Navbar/>
            <div className='navbar-help'/>
           <RecoverAccountBody/>
        </div>
    )

}

export default RecoverAccount