



import React, { useState, useEffect } from 'react';
import '../scss/pages/formAboutus.scss'
import { post, put, get } from '../utility/fetchHealper'
import Axios from 'axios';


export default function FormPriceListInfo(props) {
  const [newHeading, setNewHeading] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
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
      post("/pricelist/info", {
        title: newTitle,
        img: imageUrl,
        heading: newHeading,
        description: newDescription,
      })
        .then(() => get("/pricelist/info/"))
        .then((response) => props.setPriceInfo(response.data))
        .finally(() => {
          uploadImage();
          props.handlePopUp();
        });
    } else {
      put(`/pricelist/info/${props.title}`, {
        title: newTitle,
        img: imageUrl,
        heading: newHeading,
        description: newDescription,
      })
        .then(() => get("/pricelist/info/"))
        .then((response) => props.setPriceInfo(response.data))
        .finally(() => {
          uploadImage();
          props.handlePopUp();
        });
    }
  };




  return (
    <form className='formAbout-Container' onSubmit={handleSubmit}>
      <input
        className="formAbout-icon"
        required
        type="file"
        name="file"
        placeholder="Ladda upp icon"
        onChange={(e) => {
          setImg(e.target.files[0]);
        }}
      />

      <input
        className="formAbout-heading"
        required
        placeholder={props.title}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        className="formAbout-heading"
        required
        placeholder={props.heading}
        onChange={(e) => setNewHeading(e.target.value)}
      />
      <textarea
        className='formAbout-description'
        required
        placeholder={props.description}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>


      <div className='formAbout-btn-container'>
        {props.add &&
          <button type='submit' className='formAbout-save-btn' >skapa</button>
        }

        {!props.add &&
          <button type='submit' className='formAbout-save-btn'>ändra</button>
        }

        <button type='button' className='formAbout-cancel-btn'
          onClick={() => {
            props.handlePopUp()
            
          }
           
          
          }
        >avbryt</button>
      </div>

    </form>
  )
}
