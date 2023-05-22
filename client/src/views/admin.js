import React from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../scss/pages/admin.scss';


export default function Admin({theme, ToggleTheme}) {
  return (
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>

      <p className='areYouIntressted'>Logga in</p>

      <div className='form-img'>
        <form className='form-flex'>
        <input className='input-field' type="text" placeholder='Mejl' />
        <input className='input-field' type="text" placeholder='lösenord' />
        <button type='submit' className='submitBtn'>Logga in</button>
        </form>

      </div>
   
    </div>
    <Footer />
    </div>
  )
}
