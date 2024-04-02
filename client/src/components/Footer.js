import React from 'react'
import './../scss/pages/footer.scss';
import { NavLink } from "react-router-dom";
import facebook from './../img/facebook.svg';
import instagram from './../img/instagram.svg';
import mailIcon from './../img/mejl.svg';




export default function Footer() {
  return (
    <div>
      <footer className="footerContainer">
        <div className='radialGradientbig'></div>


        <div className="footer-heading-container">


          <h3 className='footer-heading1' >kontakt oss</h3>
          <a href='mailto:rk.code@hotmail.com'><img src={mailIcon} className='mail-Icon' /></a>
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
            <a  href='https://www.facebook.com/profile.php?id=100093569520360'> <img  src={facebook} className='instagram-Icon' /></a>
            <a  href='https://www.facebook.com/profile.php?id=100093569520360'> <img  src={instagram} className='fb-Icon' /></a>

         

        </div>

      
      
      </footer>
    </div>
  )
}
