

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    uploadImage()
  }, [img])

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('upload_preset', 'Hantverkare');
    try {
      setLoading(true);
      const res = await Axios.post(
        'https://api.cloudinary.com/v1_1/bexryd/image/upload',
        formData
      );
      setImageUrl(res.data.secure_url);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newTitle.trim() === '' ||
      !img ||
      newHeading.trim() === '' ||
      newDescription.trim() === ''
    ) {
      alert('Field cannot be empty');
      return;
    }

  };

  return (
    <form className='formAbout-team-Container' onSubmit={handleSubmit}>

      <input
        className="formAbout-team-icon"
        required
        type="file"
        name="file"
        placeholder="Ladda upp en bild"
        onChange={(e) => { setImg(e.target.files[0]) }}
      />
     
      {console.log(imageUrl)}
      <input
        className='formAbout-team-title'
        required
        placeholder={props.title}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        className='formAbout-team-name'
        required
        placeholder={props.name}
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        className='formAbout-team-heading'
        required
        placeholder={props.heading}
        onChange={(e) => setNewHeading(e.target.value)}
      />


      <input
        className='formAbout-team-heading'
        required
        placeholder={props.heading1}
        onChange={(e) => setNewHeading1(e.target.value)}
      />

      <textarea
        className='formAbout-team-description'
        required
        placeholder={props.description}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>

      <textarea
        className='formAbout-team-description'
        required
        placeholder={props.description1}
        onChange={(e) => setNewDescription1(e.target.value)}
      ></textarea>

      <div className='formAbout-team-btn-container'>
        {props.add &&
          <button className='formAbout-team-save-btn' onClick={() => {
            post("/aboutus/team", {
              title: newTitle,
              img: imageUrl,
              name:newName,
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
                props.handleCloseModals();
              });


          }} >skapa</button>
        }

        {!props.add &&
          <button className='formAbout-team-save-btn' onClick={() => {
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
              props.handleCloseModals();
            });
            

          }} >ändra</button>
        }
        <button className='formAbout-team-cancel-btn'
          onClick={() => {
            props.handlePopUp()
            props.handleCloseModals()
          }}
        >avbryt</button>

      </div>

    </form>
  )
}
