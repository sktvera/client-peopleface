import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';

import Footer from './Components/Footer/Footer';

import "./app.css"

const App = () => {
  return (

      <div className='app'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/client-peopleface' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
 
  )
} 

export default App