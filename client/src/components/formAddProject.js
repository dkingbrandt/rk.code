import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';
import {get, post} from './../utility/fetchHealper';

export default function FormAddProject({handlePopUp, setProjects, textHeading, link}) {


  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  
  return (
    <div>
        <form className='homeFormContainer' action="">

            <h1>{textHeading}</h1>
            <label for="title">Titel:</label>
            <input id='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="Titel"/>
            <label for="description">Beskrivning:</label>
            <textarea  onChange={(e) => setNewDescription(e.target.value)} name="" id="description" placeholder="Skriv en beskrivning..." cols="30" rows="10"></textarea>
            <button className='homeFormContainer-btn' onClick={()=> {

                post(link, {
                  title: newTitle,
                  heading: newTitle,
                  description: newDescription,
                })
                .then(() =>
                get(link).then((response) => setProjects(response.data))
              );
                handlePopUp();
            }}>Lägg till</button>
        </form>
  
    </div>
  )
}

