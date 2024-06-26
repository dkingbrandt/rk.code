import React from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../scss/pages/contact.scss';


export default function contact({theme, ToggleTheme, authorized, setAuthorized}) {
  return (
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header setAuthorized={setAuthorized}  authorized={authorized}  theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>

      <p className='areYouIntressted'>Är du intresserad av våra paket, vill veta mer, eller har några frågor. Kontakt oss</p>
     <div className='marginBottom'>
      <div className='form-img-1'>
        <form className='form-flex'>
        <input className='input-field-1' type="text" placeholder='Namn'/>
        <input className='input-field-1' type="text" placeholder='Mejl' />
        <input className='input-field-1' type="text" placeholder='Telefonnummer' />
        <input className='input-field-1' type="text" placeholder='Ämne' />
        <p className='choose-box-text'>Vilket/vilka paket är du intresserad av?</p>
        <div className='checkbox-Container-flex'>
           <div className='checkbox-Container'><p>Small</p><input type="checkbox" id='small-check-box'></input><label htmlFor="small-ckeck-box"></label></div>
           <div className='checkbox-Container'><p>Medium</p><input type="checkbox" id='medium-check-box'></input><label htmlFor="medium-ckeck-box"></label></div>
           <div className='checkbox-Container'><p>Large</p><input type="checkbox" id='large-check-box'></input><label htmlFor="large-ckeck-box"></label></div>
        </div>
        <textarea  className='textarea-field-1' name="" id="" cols="30" rows="10" placeholder='Skriv ditt meddelande här...'></textarea>
        <button type='submit' className='submitBtn'>Skicka</button>
        </form>

      </div>
      </div>
   
    </div>
    <Footer />
    </div>
  )
}
