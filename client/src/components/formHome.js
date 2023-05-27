import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';

export default function FormHome({handlePopUp}) {

  
  return (
    <div>
        <form className='homeFormContainer' action="">
            <label for="heading">Title:</label>
            <input id='heading' type="text" placeholder='Title'/>
            <label for="description">Description:</label>
            <input id='description' type="text" placeholder='Description'/>
            <button className='homeFormContainer-btn' onClick={handlePopUp}>Ändra</button>
        </form>
  
    </div>
  )
}
