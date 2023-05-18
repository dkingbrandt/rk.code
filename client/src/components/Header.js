import React from 'react'
import './../scss/pages/header.scss';
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  const logga = "[ RK.CODE ]";
  return (
    <div>
      <header className="headerContainer">
      <div><p className='logga'>{logga}</p></div>
        <ul className="headerList">
       
          <li>
          <NavLink  className="link"
              to="/"
             >
                Home</NavLink>
           </li>
          <li>
          <NavLink  className="link"
              to="/om-oss"
            >
                Om oss</NavLink>
           </li>
          <li>
          <NavLink  className="link"
              to="/prislista"
             >
                Prislista</NavLink>
           </li>
          <li>
          <NavLink  className="link"
              to="/kontakt"
            >
                Kontakt</NavLink>
           </li>
        </ul>
      </header>
    </div>
  )
}
