import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './../scss/pages/aboutUs.scss';


export default function About() {
  return (
    <div className='about-container'>
      <Header />
      <div className='history-wrapper'>

        <div className='history-container'>
          <h1 className='history-heading'>VÅR HISTORIA</h1>
          <div className='history-create-box'></div>
          <div className='history-knowledge-box'></div>
          <div className='history-vision-box'></div>


        </div>

      </div>
     
      
      <Footer/>
    </div>
  )
}
