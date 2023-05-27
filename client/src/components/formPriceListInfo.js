



import React, { useState } from 'react'
import '../scss/pages/formAboutus.scss'
import { post, put } from '../utility/fetchHealper'

export default function FormPriceListInfo(props) {
  const [heading, setHeading] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")

  return (
    <div className='formAbout-Container'>

      <input className="formAbout-icon" value={img} placeholder="Ladda upp icon" onChange={(e) => setImg(e.target.value)}>
      </input>

      <input className='formAbout-heading' placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)}>
      </input>

      <input className='formAbout-heading' placeholder="Rubrik" value={heading} onChange={(e) => setHeading(e.target.value)}>
      </input>

      <textarea className='formAbout-description' placeholder="Beskrivning" value={description} onChange={(e) => setDescription(e.target.value)}>
      </textarea>
      <div className='formAbout-btn-container'>
        {props.add &&
          <button className='formAbout-save-btn' onClick={() => {
            post("/pricelist/info", {
              title: title,
              img: img,
              heading: heading,
              description: description,

            })

            props.handlePopUp()
            props.handleCloseModals()


          }} >skapa</button>
        }

        {!props.add &&
          <button className='formAbout-save-btn' onClick={() => {
            put(`/pricelist/info/${title}`, {
              title: title,
              img: img,
              heading: heading,
              description: description,

            })

            props.handlePopUp()
            props.handleCloseModals()


          }} >ändra</button>
        }
        <button className='formAbout-cancel-btn' onClick={() => props.handlePopUp()}>avbryt</button>
      </div>

    </div>
  )
}
