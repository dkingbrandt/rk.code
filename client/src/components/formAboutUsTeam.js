

import React, { useState } from 'react'
import '../scss/pages/formAboutUsTeam.scss'
import { post, put } from '../utility/fetchHealper'

export default function FormAboutUsTeam(props) {
  const [heading1, setHeading1] = useState("")
  const [heading2, setHeading2] = useState("")
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [description1, setDescription1] = useState("")
  const [description2, setDescription2] = useState("")
  const [img, setImg] = useState("")

  return (
    <div className='formAbout-team-Container'>

      <input className="formAbout-team-icon" value={img} placeholder="Ladda upp icon" onChange={(e) => setImg(e.target.value)}>
      </input>

      <input className='formAbout-team-title' placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)}>
      </input>
      <input className='formAbout-team-name' placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)}>
      </input>

      <input className='formAbout-team-heading' placeholder="Rubrik 1" value={heading1} onChange={(e) => setHeading1(e.target.value)}>
      </input>
      <input className='formAbout-team-heading' placeholder="Rubrik 2" value={heading2} onChange={(e) => setHeading2(e.target.value)}>
      </input>

      <textarea className='formAbout-team-description' placeholder="Beskrivning 1" value={description1} onChange={(e) => setDescription1(e.target.value)}>
      </textarea>
      <textarea className='formAbout-team-description' placeholder="Beskrivning 2" value={description2} onChange={(e) => setDescription2(e.target.value)}>
      </textarea>
      <div className='formAbout-team-btn-container'>
        {props.add &&
          <button className='formAbout-team-save-btn' onClick={() => {
            post("/aboutus/team", {
              title: title,
              img: img,
              name:name,
              heading1: heading1,
              heading2: heading2,
              description1: description1,
              description2: description2,

            })

            props.handlePopUp()
            props.handleCloseModals()


          }} >skapa</button>
        }

        {!props.add &&
          <button className='formAbout-team-save-btn' onClick={() => {
            put(`/aboutus/team/${title}`, {
              title: title,
              img: img,
              name: name,
              heading1: heading1,
              heading2: heading2,
              description1: description1,
              description2: description2,

            })

            props.handlePopUp()
            props.handleCloseModals()


          }} >ändra</button>
        }
        <button className='formAbout-team-cancel-btn' onClick={() => {
          props.handlePopUp()
          props.handleCloseModals()
        }}>avbryt</button>
      </div>

    </div>
  )
}
