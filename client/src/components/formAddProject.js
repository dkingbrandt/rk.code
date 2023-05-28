import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';
import {get, post} from './../utility/fetchHealper';

export default function FormAddProject({handlePopUp, setProjects}) {


  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  
  return (
    <div>
        <form className='homeFormContainer' action="">

            <h1>Lägg till ett nytt Projekt</h1>
            <label for="title">Titel:</label>
            <input id='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="Titel"/>
            <label for="description">Beskrivning:</label>
            <textarea  onChange={(e) => setNewDescription(e.target.value)} name="" id="description" placeholder="Skriv en beskrivning..." cols="30" rows="10"></textarea>
            <button className='homeFormContainer-btn' onClick={()=> {

                post(`home/projects/`, {
                  title: newTitle,
                  heading: newTitle,
                  description: newDescription,
                })
                .then(() =>
                get("home/projects/").then((response) => setProjects(response.data))
              );
                handlePopUp();
            }}>Lägg till</button>
        </form>
  
    </div>
  )
}

