import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';
import {get, put} from './../utility/fetchHealper';

export default function FormHome({handlePopUp,heading, title, description, setProjects}) {


  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  
  return (
    <div>
        <form className='homeFormContainer' action="">
          
            <label for="title">Title:</label>
            <input id='title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder={title}/>
            <label for="description">Description:</label>
            <textarea  onChange={(e) => setNewDescription(e.target.value)} name="" id="description" placeholder={description} cols="30" rows="10"></textarea>
            <button className='homeFormContainer-btn' onClick={()=> {

                put(`home/projects/${title}`, {
                  title: title,
                  heading: newTitle,
                  description: newDescription,
                })
                .then(() =>
                get("home/projects/").then((response) => setProjects(response.data))
              );
                handlePopUp();
            }}>Ändra</button>
        </form>
  
    </div>
  )
}

