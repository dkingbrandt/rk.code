

import React, { useState, useEffect } from 'react';
import '../scss/pages/formAboutUsTeam.scss'
import { post, put, get } from '../utility/fetchHealper'
import Axios from 'axios';


export default function FormAboutUsTeam(props) {
  const [newHeading1, setNewHeading1] = useState(props.heading)
  const [newHeading, setNewHeading] = useState(props.heading)
  const [newName, setNewName] = useState(props.name)
  const [newTitle, setNewTitle] = useState(props.title)
  const [newDescription1, setNewDescription1] = useState(props.heading)
  const [newDescription, setNewDescription] = useState(props.heading)
  const [img, setImg] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    uploadImage()
  }, [img])

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'Hantverkare');
    try {
      const res = await Axios.post(
        'https://api.cloudinary.com/v1_1/bexryd/image/upload',
        formData
      );
      setImageUrl(res.data.secure_url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.add) {
      post("/aboutus/team", {
        title: newTitle,
        img: imageUrl,
        name: newName,
        heading1: newHeading,
        heading2: newHeading1,
        description1: newDescription,
        description2: newDescription1,

      }).then(() =>
        get("/aboutus/team").then((response) => props.setTeam(response.data))
      )

        .finally(() => {
          uploadImage();
          props.handlePopUp();
        });

    } else {
      put(`/aboutus/team/${props.title}`, {
        title: newTitle,
        img: imageUrl,
        name: newName,
        heading1: newHeading,
        heading2: newHeading1,
        description1: newDescription,
        description2: newDescription1,

      }).then(() =>
        get("/aboutus/team").then((response) => props.setTeam(response.data))
      ).finally(() => {
        uploadImage();
        props.handlePopUp();
      });
    }
   
  };

   const handleDescriptionChange = (e) => {
    const descriptionValue = e.target.value;
    const descriptionArray = descriptionValue.split('\n'); 

    setNewDescription(descriptionArray);
  };
   const handleDescriptionChange1 = (e) => {
    const descriptionValue = e.target.value;
    const descriptionArray = descriptionValue.split('\n'); 

    setNewDescription1(descriptionArray);
  };

  return (
    <form className='formAbout-team-Container' onSubmit={handleSubmit}>

      <input
        className="formAbout-team-icon"
        required
        type="file"
        name="file"
        placeholder={!props.add ? props.img :null}
        onChange={(e) => { setImg(e.target.files[0]) }}
      />
     
      <input
        className='formAbout-team-title'
        required
        placeholder={!props.add ? props.title : "Titel"}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        className='formAbout-team-name'
        required
        placeholder={!props.add ? props.name : "Namn" }
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        className='formAbout-team-heading'
        required
        placeholder={!props.add ? props.heading : "Rubrik 1"}
        onChange={(e) => setNewHeading(e.target.value)}
      />


      <input
        className='formAbout-team-heading'
        required
        placeholder={!props.add ? props.heading1 : "Rubrik 2"}
        onChange={(e) => setNewHeading1(e.target.value)}
      />

      <textarea
        className='formAbout-team-description'
        rows="8" cols="50"

        required
        placeholder={!props.add ? props.description : "textfält 1"}
        onChange={handleDescriptionChange}

      ></textarea>

      <textarea
        className='formAbout-team-description'
        rows="8" cols="50"

        required
        placeholder={!props.add ? props.description1 :"textfält 2"}
        onChange={handleDescriptionChange1}

      ></textarea>

      <div className='formAbout-team-btn-container'>
        {props.add &&
          <button className='formAbout-team-save-btn' type='submit'>skapa</button>
        }

        {!props.add &&
          <button className='formAbout-team-save-btn' type='submit'>ändra</button>
        }
        <button className='formAbout-team-cancel-btn'
          type='submit'
          onClick={() => {
            props.handlePopUp()
          
          }}
        >avbryt</button>

      </div>

    </form>
  )
}
