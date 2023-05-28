

import React, { useState } from 'react'
import '../scss/pages/formAboutus.scss'
import {post,put,get} from '../utility/fetchHealper'

export default function FormAboutUsHistory(props) {
  const [newHeading, setNewHeading] = useState(props.heading)
  const [newTitle, setNewTitle] = useState(props.title)
  const [newDescription, setNewDescription] = useState(props.heading)
  const [newImg, setNewImg] = useState(props.img)

  return (
    <div className='formAbout-Container'>
      
      <input className="formAbout-icon" value={props.img} placeholder="Ladda upp icon" onChange={(e) => setNewImg(e.target.value)}>
      </input>
      
      <input className='formAbout-heading' placeholder="Titel" value={props.title} onChange={(e) => setNewTitle(e.target.value)}>
      </input>
      
      <input className='formAbout-heading' placeholder={props.heading} value={newHeading} onChange={(e) => setNewHeading(e.target.value)}>
      </input>

      <textarea className='formAbout-description' placeholder="Beskrivning" value={props.description} onChange={(e) => setNewDescription(e.target.value)}>
      </textarea>
      <div className='formAbout-btn-container'>
        {props.add &&
       <button className='formAbout-save-btn' onClick={() => {
          post("/aboutus/history", {
            title: newTitle,
            img: newImg,
            heading: newHeading,
            description: newDescription,
            
          }).then(() =>
              get("aboutus/history/").then((response) => props.setHistory(response.data))
            );
          
            props.handlePopUp()
            props.handleCloseModals()
         
         
        }} >skapa</button>
        }
        
        {!props.add &&
        <button className='formAbout-save-btn' onClick={() => {
          put(`/aboutus/history/${props.title}`, {
            title: newTitle,
            img: newImg,
            heading: newHeading,
            description: newDescription,


          }).then(() =>
            get("aboutus/history/").then((response) => props.setHistory(response.data))
          );

            props.handlePopUp()
            props.handleCloseModals()


        }} >ändra</button>
        }
        <button className='formAbout-cancel-btn' onClick={()=> props.handlePopUp()}>avbryt</button>
      </div>
     
    </div>
  )
}
