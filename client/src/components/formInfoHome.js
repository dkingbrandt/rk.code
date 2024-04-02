import React, { useState, useEffect } from 'react';
import './../scss/pages/cardModal.scss';
import { get, put } from './../utility/fetchHealper';
import Axios from 'axios';


export default function FormInfoHome({handlePopUp,heading, title, description, setInfo}) {


  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [img, setImg] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imgLight, setImgLight] = useState("");
  const [imageUrlLight, setImageUrlLight] = useState("");


  useEffect(() => {
    uploadImage()
  }, [img])

  useEffect(() => {
    uploadImageLight();
  }, [imgLight]);

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

   const uploadImageLight = async () => {
    const formData = new FormData();
    formData.append('file', imgLight);
    formData.append('upload_preset', 'Hantverkare');
    try {
      const res = await Axios.post(
        'https://api.cloudinary.com/v1_1/bexryd/image/upload',
        formData
      );
      setImageUrlLight(res.data.secure_url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`home/info/${title}`, {
      img: imageUrl,
      imgLight:imageUrlLight,
      title: newTitle,
      heading: newTitle,
      description: newDescription,
    })
      .then(() => get("home/info/")
        .then((response) => setInfo(response.data))
        .finally(() => {
          uploadImage();
          uploadImageLight();
          handlePopUp();
        })
      )

   

  };
  
  return (
    
    <div>
      <form className='homeFormContainer' onSubmit={handleSubmit}>
        
        <label className='label-img-dark' for="darkImg">Dark-mode bild:</label>

        <input
          className="formAbout-icon"
          id="label-img-dark"
          type="file"
          name="file"
          placeholder="Ladda upp icon"
          onChange={(e) => {setImg(e.target.files[0]);}}
        />

        <label className='label-img-light' for="lightimg">Light-mode bild:</label>

        <input
          className="formAbout-icon"
          id="label-img-dark"
          type="file"
          name="file"
          placeholder="Ladda upp icon"
          onChange={(e) => {setImgLight(e.target.files[0]);}}
        />
            
        <label for="title">Title:</label>
        <input
          required
          id='title' 
          type="text"
          placeholder={heading}
          onChange={(e) => setNewTitle(e.target.value)}
        />


        <label for="description">Description:</label>
        <textarea
          required
          name=""
          id="description"
          placeholder={description}
          cols="30"
          rows="10"
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
            
        <button type='submit' className='homeFormContainer-btn'>Ändra</button>
        </form>
  
    </div>
  )
}

