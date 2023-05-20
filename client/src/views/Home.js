import React from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer'
import data from './../img/data.svg';
import dollar from './../img/dollar.svg';
import heart from './../img/heart.svg';
import comment from './../img/comment.svg';
import wildline from './../img/wildline.png';


export default function Home() {
  return (
    <div>
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>
      <div className='radialGradientbig'></div>
      <div className='textBox'>
      <h1 className='textBox-h1'>En Junior webbyrå där idéer blir till verklighet.<br/><span className='textBox-h1-color'>Optimera ditt företag idag!</span></h1>
       <p className='textBox-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
       <div className='textBox-Btn-Container'>
        <button className='btn-info'>mer info</button>
        <button className='btn-contact'>kontakta oss</button>
       </div>
      </div>
      </div>
    </div>
    

    <div  className='middleContainer'>
    <hr/>

    <div className='middleContainer-img'>
    <div className='middleContainer-grid'>

     <div className='icon-container'>
      <img className='icon data' src={data} alt="computer" />
      <div>
         <h4 className='icon-heading'>Skräddarsydd Hemsida</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     <div className='icon-container'>
      <img className='icon dollar' src={dollar} alt="computer" />
      <div>
         <h4 className='icon-heading'>Professionell hemsida till ett lågt pris</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     <div className='icon-container'>
      <img className='icon heart' src={heart} alt="computer" />
      <div>
         <h4 className='icon-heading'>Passionerade utvecklare</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     <div className='icon-container'>
      <img className='icon comment' src={comment} alt="computer" />
      <div>
         <h4 className='icon-heading'>Kontakt med utvecklare/designers</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     </div>

    </div>

    <hr/>

    <div className='project-container'>

      <div className='card'>
        <img className='card-img' src={wildline} alt="websitephoto" />

      </div>

    </div>

    </div>
      <Footer />

    </div>
  )
}
