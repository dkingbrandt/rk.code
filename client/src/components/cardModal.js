import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';

export default function CardModal({ handlePopUp, popUp, component }) {

  
  return (
    <div
    className="blurr"
    style={{
      opacity: popUp ? "1" : "0",
      visibility: popUp ? "visible" : "hidden",
      zIndex: popUp ? "300" : "-2",
    }}
  >
    <div className="popUp">
      <div>
          <p className="popUp--close" onClick={() => {
            handlePopUp()
          
          }}>
          &times;{" "}
        </p>
        {component}
      </div>

     
    </div>
    </div>
  )
}
