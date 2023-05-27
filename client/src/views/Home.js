import React, { useState, useEffect } from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer'
import data from './../img/data.svg';
import dollar from './../img/dollar.svg';
import heart from './../img/heart.svg';
import comment from './../img/comment.svg';
import dataLight from './../img/data-light.svg';
import dollarLight from './../img/dollar-light.svg';
import heartLight from './../img/heart-light.svg';
import commentLight from './../img/comment-light.svg';
import wildline from './../img/wildline.png';
import CardModal from '../components/cardModal';
import FormHome from '../components/formHome';
import { get, post, put, erase, patch} from "./../utility/fetchHealper";



export default function Home({theme, ToggleTheme, authorized}) {

  const [popUp, setPopUp] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    get("http://localhost:8080/home/info").then((response) =>
      setInfo(response.data)
    );
  }, []);

  console.log(info);

  const handlePopUp = () => {
    setPopUp((current) => !current); //toggle
  };

  return (
    <div>
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>
      <div className='radialGradientbig'></div>
      <div className='textBox'>
     
      <h1 className='textBox-h1'>En Junior webbyrå där idéer blir till verklighet.<br/><span className='textBox-h1-color'>Optimera ditt företag idag!</span></h1>
       <p className='textBox-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
       <div className='textBox-Btn-Container'>
        <button className='btn-info-home'>mer info</button>
        <button className='btn-contact'>kontakta oss</button>
       </div>
      </div>
      </div>
    </div>
    

    <div  className='middleContainer'>
    <hr className='hr'/>

    <div className='middleContainer-img'>
    <div className='middleContainer-grid'>
     
    <div className='card-container'>
     <div className='icon-container'>
      {theme === "dark" ? (
      <img className='icon data' src={data} alt="computer" />
      ):(
        <img className='icon data' src={dataLight} alt="computer" />
      )}
      <div>
         <h4 className='icon-heading'>Skräddarsydd Hemsida</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     {authorized && (
      <div className='admin-Btn-Container-icon'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn'>Ändra</button>
      </div>
      )}
      </div>

     <div className='card-container'>
     <div className='icon-container'>
      {theme === "dark" ? (
      <img className='icon dollar' src={dollar} alt="computer" />
      ):(
        <img className='icon dollar' src={dollarLight} alt="computer" />
      )}
      <div>
         <h4 className='icon-heading'>Professionell hemsida till ett lågt pris</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     {authorized && (
      <div className='admin-Btn-Container-icon'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn'>Ändra</button>
      </div>
      )}
      </div>
  
     <div className='card-container'>
     <div className='icon-container'>
      {theme === "dark" ? (
      <img className='icon heart' src={heart} alt="computer" />
      ):(
        <img className='icon heart' src={heartLight} alt="computer" />
      )}
      <div>
         <h4 className='icon-heading'>Passionerade utvecklare</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>

     </div>

     {authorized && (
      <div className='admin-Btn-Container-icon'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn'>Ändra</button>
      </div>
      )}
      </div>
    
      <div className='card-container'>
     <div className='icon-container'>
      {theme === "dark" ? (
      <img className='icon comment' src={comment} alt="computer" />
      ):(
        <img className='icon comment' src={commentLight} alt="computer" />
      )}
      <div>
         <h4 className='icon-heading'>Kontakt med utvecklare/designers</h4> 
         <p className='icon-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
      </div>
     </div>

     {authorized && (
      <div className='admin-Btn-Container-icon'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn'>Ändra</button>
      </div>
      )}
      </div>

     </div>

    </div>

    <hr className='hr'/>

    <div className='project-container'>
      <h2>Tidigare Project</h2>
      <div className='project-container-grid'>

      <div className='card-container'>

      <div className='card'>
        <img className='card-img' src={wildline} alt="websitephoto" />
        <p className='card-heading'>Wild Line Bengals</p>
        <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
        <div className="textBox-Btn-Container">
          <button className='btn-info-home'>mer info</button>
          <button className='btn-prev'>live preview</button>
        </div>
      </div>
      {authorized && (
      <div className='admin-Btn-Container'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn' onClick={handlePopUp}>Ändra</button>
      </div>
      )}
      </div>

      <div className='card-container'>

      <div className='card'>
        <img className='card-img' src={wildline} alt="websitephoto" />
        <p className='card-heading'>Wild Line Bengals</p>
        <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
        <div className="textBox-Btn-Container">
          <button className='btn-info-home'>mer info</button>
          <button className='btn-prev'>live preview</button>
        </div>
      </div>
      
      {authorized && (
      <div className='admin-Btn-Container'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn' onClick={handlePopUp}>Ändra</button>
      </div>
    )}

      </div>

      <div className='card-container'>

      <div className='card'>
        <img className='card-img' src={wildline} alt="websitephoto" />
        <p className='card-heading'>Wild Line Bengals</p>
        <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
        <div className="textBox-Btn-Container">
          <button className='btn-info-home'>mer info</button>
          <button className='btn-prev'>live preview</button>
        </div>
      </div>

     {authorized && (
      <div className='admin-Btn-Container'>
        <button className='erase-Btn'>Ta bort</button>
        <button className='change-Btn' onClick={handlePopUp}>Ändra</button>
      </div>
      )}
      </div>


      </div>
    </div>

    <CardModal handlePopUp={handlePopUp} popUp={popUp} component={<FormHome/>}/>

    </div>
      <Footer />

    </div>
  )
}
