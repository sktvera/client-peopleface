import React, { useEffect, useState } from 'react'
import LogoWhite from "./Assets/Img/LogoWhite.png"
import { ArrowDown2, ArrowUp2, Global, HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { IconButton } from '@mui/material';

import { NavLink } from "react-router-dom";
import $ from 'jquery'

import "./Assets/styles.css"


const Navbar = () => {

  const [ dropdMenu, setDropdMenu] = useState(false)

  const [ scrolls, setScrolls ] = useState(false)

  const [proceduresDropdown, setProceduresDropdown] = useState(false)

  const burgerMenu = () => {
    $(window).resize(function(){
      if($(window).width() > 1101){
        setDropdMenu(false)
      } 
    })
  }

  /* Scroll function */
    var previousScroll = 0;
  $(window).scroll(function(event){
    var scroll = $(this).scrollTop();
    if (scroll > previousScroll && scroll > 50){
      setScrolls(true)
    } else {
      setScrolls(false)
    }
  });

  useEffect(() => {
    burgerMenu(false)
  }, [])
 
  return (
    <div className='navbar'>
      <div className={scrolls ? 'bgcolor' : 'navbar_div'}>
        <div className='HambergerMenu'>
          <IconButton onClick={() => setDropdMenu(!dropdMenu)}>
            <HambergerMenu size="32" color="white"/>
          </IconButton>
        </div>
        <div className='nav_logo'>
          <NavLink to="/" onClick={() => setDropdMenu(false)}>
            <img src={LogoWhite} alt="logo" className='logo' />
          </NavLink>
        </div>
        <div className={dropdMenu ? 'active_dropdMenu' : 'links'}>
          <ul>
            <li><NavLink to="/Register" className='navlinks' onClick={() => setDropdMenu(false)} >Registrarse</NavLink></li>
            <li><NavLink to="/Questions" className='navlinks' onClick={() => setDropdMenu(false)} >Preguntas Frecuentes</NavLink></li>
            <li><NavLink to="/allies" className='navlinks' onClick={() => setDropdMenu(false)} >Aliados</NavLink></li>
            <li><NavLink to="/aboutus" className='navlinks' onClick={() => setDropdMenu(false)} >Nosotros</NavLink></li>
          </ul>
        </div>
        <div className='icons-links'>
          <IconButton sx={{padding: '5px'}}>
            <NavLink to="https://github.com/sktvera/client-peopleface" ><Global size="32" color="white"/></NavLink>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar