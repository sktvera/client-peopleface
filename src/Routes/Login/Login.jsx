import React from 'react'
import LoginBody from '../../Components/LoginBody/LoginBody'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation} from 'react-router';
import "./Assets/styles.css"


const Login = () => {
    const location = useLocation();

    return(
        <div>
            <Navbar/>
            <div className='navbar-help'/>
            <LoginBody
            location={location}
            />
        </div>
    )

}

export default Login