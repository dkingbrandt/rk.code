import React from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';


export default function Home() {
  return (
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

    <div  className='middleContainer'>
    <hr/>
    <div className='middleContainer-img'></div>
    <hr/>
    </div>

    </div>
  )
}
