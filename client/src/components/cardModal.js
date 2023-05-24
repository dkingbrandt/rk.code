import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';

export default function CardModal({handlePopUp,popUp}) {

  
  return (
    <div
    className="blurr"
    style={{
      opacity: popUp ? "1" : "0",
      visibility: popUp ? "visible" : "hidden",
      zIndex: popUp ? "1000" : "-2",
    }}
  >
    <div className="popUp">
      <div>
        <p className="popUp--close" onClick={handlePopUp}>
          &times;{" "}
        </p>
        <h1>Text</h1>
      </div>

     
    </div>
    </div>
  )
}
