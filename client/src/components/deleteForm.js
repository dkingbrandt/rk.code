import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';
import {get, erase} from './../utility/fetchHealper';

export default function FormDelete({handlePopUp, title, setProjects, textHeading}) {



  
  return (
    <div>
        <form  className='homeFormContainer' action="">
            <h1>{textHeading}</h1>
            <button className='homeFormContainer-btn' onClick={()=> {

                erase(`home/projects/${title}`, {
                })
                .then(() =>
                get("home/projects/").then((response) => setProjects(response.data))
              );
                handlePopUp();
            }}>Ja</button>
            <button className='homeFormContainer-btn' onClick={ handlePopUp}
                >Nej</button>
        </form>
  
    </div>
  )
}

