import React from 'react'
import './../scss/pages/footer.scss';
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';



export default function Footer() {
  return (
    <div>
      <footer className="footerContainer">
        <div className='radialGradientbig'></div>


        <div className="footer-heading-container">


          <h3 className='footer-heading1' >kontakt oss</h3>
          <Icon icon="material-symbols:mail-outline" className='mail-Icon' />
        </div>
      <ul className="footerList">

        <li>
          <NavLink className="link"
            to="/"
          >
            Home</NavLink>
        </li>
        <li>
          <NavLink className="link"
            to="/om-oss"
          >
            Om oss</NavLink>
        </li>
        <li>
          <NavLink className="link"
            to="/prislista"
          >
            Prislista</NavLink>
        </li>
        <li>
          <NavLink className="link"
            to="/kontakt"
          >
            Kontakt</NavLink>
        </li>
        </ul>

        <div className='radialGradientsmall'> </div>

          <div className='footer-socialMedia-container'>
            <p className='heading-socialMedia'>Social Media</p>
            <Icon icon="bi:instagram" className='instagram-Icon' />
            <Icon icon="bi:facebook" className='fb-Icon' />

         

        </div>

      
      
      </footer>
    </div>
  )
}
