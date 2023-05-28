import React, {useState} from 'react'
import './../scss/pages/cardModal.scss';

export default function SmalModal({handlePopUp,popUp, component}) {

  
  return (
    <div
    className="blurr"
    style={{
      opacity: popUp ? "1" : "0",
      visibility: popUp ? "visible" : "hidden",
      zIndex: popUp ? "1000" : "-2",
    }}
  >
    <div className="popUp-smal">
      <div>
        <p className="popUp-smal--close" onClick={handlePopUp}>
          &times;{" "}
        </p>
        {component}
      </div>

     
    </div>
    </div>
  )
}
