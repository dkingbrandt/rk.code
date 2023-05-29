import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';

export default function CardModal({ handlePopUp, popUp, component, handleCloseModals }) {

  
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
          <p className="popUp--close" onClick={() => {
            handlePopUp()
            handleCloseModals()
          
          }}>
          &times;{" "}
        </p>
        {component}
      </div>

     
    </div>
    </div>
  )
}
