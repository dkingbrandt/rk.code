import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <ul>
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
