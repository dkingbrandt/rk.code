import React, {useState} from 'react'
import './../scss/pages/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../scss/pages/admin.scss';
import {post} from './../utility/fetchHealper';
import { useNavigate } from 'react-router-dom';


export default function Admin({theme, ToggleTheme, setAuthorized, authorized}) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  }

  let navigate = useNavigate();

  function routeBack() {
    navigate('/')
  }
  
  return (
    <div className='pageContainer'>

    <div className='TopContainer'>
       <Header authorized={authorized} setAuthorized={setAuthorized} theme={theme} ToggleTheme={ToggleTheme}/>
      <div className='radialGradientDarkGreen'></div>
      <div className='radialGradientsmall'></div>

      <p className='areYouIntressted'>Logga in</p>

      <div className='form-img-admin'>
        <form onSubmit={handleSubmit} className='form-flex'>
        <input className='input-field' placeholder='Mejl' required type="email" id="email" name="email"
         onChange={e => setLoginEmail(e.target.value)} />
        <input className='input-field' required id="password" name='password' type="password" pattern=".{8,16}$" 
        title='Lösenordet måste vara minst 8 tecken långt'
         placeholder="Ange Lösenord" onChange={e => setLoginPassword(e.target.value)}  />
        <button type='submit' className='submitBtn'
           onClick={() => {
            post("/login", {

              email: loginEmail,
              password: loginPassword,

            })
              .then((response) => {

                // props.setUser(response.data)

                if (response.data) {
                  setAuthorized(response.status)
                  setLoginEmail("");
                  setLoginPassword("");
                  routeBack();

                }
                else if (!response.data) {
                  alert("Fel mejl eller fel lösenord");

                }

              })


          }}
        >Logga in</button>
        </form>

      </div>
   
    </div>
    <Footer />
    </div>
  )
}
