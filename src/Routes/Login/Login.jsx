import React from 'react'
import LoginBody from '../../Components/LoginBody/LoginBody'
import Navbar from '../../Components/Navbar/Navbar'
 
import "./Assets/styles.css"


const Login = () => {

    return(
        <div>
            <Navbar/>
            <div className='navbar-help'/>
            <LoginBody/>
        </div>
    )

}

export default Login