import React from 'react'
import './../scss/pages/header.scss';
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  const logga = "[ RK.CODE ]";
  const homeText = "< HOME />"
  const aboutText = "< Om oss />"
  const priceText = "< Prislista />"
  const contactText = "< Kontakt />"
  return (
    <div>
      <header className="headerContainer">
      <div><p className='logga'>{logga}</p></div>
        <ul className="headerList">
       
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
