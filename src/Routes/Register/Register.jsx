import React from 'react'
import RegisterBody from '../../Components/RegisterBody/RegisterBody'
import Navbar from '../../Components/Navbar/Navbar'
 
import "./Assets/styles.css"


const Register = () => {

    return(
        <div>
            <Navbar/>
            <div className='navbar-help'/>
           <RegisterBody/>
        </div>
    )

}

export default Register