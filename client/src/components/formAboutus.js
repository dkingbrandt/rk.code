

import React from 'react'
import '../scss/pages/formAboutus.scss'

export default function formAboutus(heading,description,img) {
  return (
    <div className='formAbout-Container'>
     
      <input className="formAbout-icon" placeholder="Ladda upp icon">
      </input>

      
      <input className='formAbout-heading'  placeholder="Rubrik">
      </input>

      <textarea className='formAbout-description'  placeholder="Beskrivning">
      </textarea>
      <div className='formAbout-btn-container'>
        <button className='formAbout-save-btn'>spara</button>
        <button className='formAbout-cancel-btn'>avbryt</button>
      </div>
     
    </div>
  )
}
