import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import RecoverAccount from './Routes/RecoverAccount/RecoverAccount';
import HomePage from './Routes/HomePage/HomePage';
import CreateContent from './Routes/CreateContent/CreateContent';
import Profile from './Routes/Profile/Profile';


import Footer from './Components/Footer/Footer';

import "./app.css"

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar/>
        <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
          <Route path='/client-peopleface' element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/RecoverAccount' element={<RecoverAccount/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/CreateContent' element={<CreateContent/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </div>
      </Provider>
  )
} 

export default App