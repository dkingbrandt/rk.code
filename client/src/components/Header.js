import React from 'react'
import './../scss/pages/header.scss';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {get} from './../utility/fetchHealper';
import { useNavigate } from 'react-router-dom';


export default function Header({theme, ToggleTheme, authorized, setAuthorized}) {

  const [meny, setMeny] = useState(false);

  const menuToggle = () => {
    setMeny((current) => !current); //toggle

  };

  let navigate = useNavigate();

  function routeBack() {
    navigate('/')
  }

  const logga = "[ RK.CODE ]";
  const homeText = "< HOME />"
  const aboutText = "< Om oss />"
  const priceText = "< Prislista />"
  const contactText = "< Kontakt />"
  return (
    <div>
      <header className="headerContainer">
        <div className='menyBtn' onClick={menuToggle}>
          <div className={!meny?'menu': 'menu openMeny'}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          </div>
          </div>
      <div><p className='logga'>{logga}</p></div>
      {authorized &&(
      <button className='LogoutBtn' onClick={() => {

        get("/logout");
        setAuthorized(false);
        routeBack() 
      }}>Logga ut</button>
      )}
   

        <ul className={meny ? "headerList navShow" : "headerList hiddenNav"}>
        <label className='switch'>
        {theme === 'dark' ? (
      <svg style={{position:"absolute",  top:"8px",left: "45px"}}  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-brightness-high" viewBox="0 0 16 16">
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
     </svg>
     ) : (
     <svg style={{position:"absolute", top:"8px",right: "45px",zIndex:5}}  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-moon-fill" viewBox="0 0 16 16">
     <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
     </svg>
     )
     
     }
       
      <input type="checkbox" onChange={ToggleTheme} checked={theme ==="light"} />
      <span className='slider'></span>
    

      </label>
          <li>
          <NavLink  className={({isActive}) => isActive  ? "hide" : "link"}  to="/">  Home</NavLink>
          <NavLink  className={({isActive}) => isActive  ? "link-blue" : "hide"}  to="/">{homeText}</NavLink>
           </li>
          <li>
          <NavLink  className={({isActive}) => isActive  ? "hide" : "link"}  to="/om-oss" >Om oss</NavLink>
          <NavLink  className={({isActive}) => isActive  ? "link-blue"  : "hide"}  to="/om-oss" >{aboutText}</NavLink>
           </li>
          <li>
          <NavLink  className={({isActive}) => isActive  ? "hide" : "link"}  to="/prislista">Prislista</NavLink>
          <NavLink  className={({isActive}) => isActive  ? "link-blue" : "hide"}  to="/prislista">{priceText}</NavLink>
           </li>
          <li>
          <NavLink   className={({isActive}) => isActive  ? "hide" : "link"} to="/kontakt" > Kontakt</NavLink>
          <NavLink   className={({isActive}) => isActive  ? "link-blue" : "hide"} to="/kontakt" >{contactText}</NavLink>
           </li>
        </ul>
      </header>
    </div>
  )
}
