import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';
import {get, erase} from './../utility/fetchHealper';

export default function FormDelete(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  
  return (
    <div>
      <form className='homeFormContainer' onSubmit={handleSubmit} >
            <h1>{props.textHeading}</h1>
            <button  type="submit" className='homeFormContainer-btn' onClick={()=> {

                erase(`${props.link}${props.title}`, {
                })
                .then(() =>
                get(props.link).then((response) => props.setProjects(response.data))
                ).finally(() => {
                  props.handlePopUp();
                });
            }}>Ja</button>
            <button type="button" className='homeFormContainer-btn' onClick={ ()=> props.handlePopUp()}
                >Nej</button>
        </form>
  
    </div>
  )
}

