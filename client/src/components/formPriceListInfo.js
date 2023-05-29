



import React, { useState, useEffect } from 'react';
import '../scss/pages/formAboutus.scss'
import { post, put, get } from '../utility/fetchHealper'
import Axios from 'axios';


export default function FormPriceListInfo(props) {
  const [newHeading, setNewHeading] = useState(props.heading)
  const [newTitle, setNewTitle] = useState(props.title)
  const [newDescription, setNewDescription] = useState(props.description)
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
      !newDescription ||
      newHeading.trim() === ''

    ) {
      alert('Field cannot be empty');
      return;
    }

  };





  return (
    <form className='formAbout-Container' onSubmit={handleSubmit}>
      {console.log(imageUrl)}
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
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        className="formAbout-heading"
        required
        placeholder={props.heading}
        value={newHeading}
        onChange={(e) => setNewHeading(e.target.value)}
      />
      <textarea
        className='formAbout-description'
        placeholder={props.description}
        required
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>


      <div className='formAbout-btn-container'>
        {props.add &&
          <button className='formAbout-save-btn' onClick={() => {
            post("/pricelist/info", {
              title: newTitle,
              img: imageUrl,
              heading: newHeading,
              description: newDescription,

            })
              .then(() => get("/pricelist/info/")
              .then((response) => props.setPriceInfo(response.data)))
              .finally(() => {
                uploadImage();
                props.handlePopUp();
              });
          }} >skapa</button>
        }

        {!props.add &&
          <button className='formAbout-save-btn' onClick={() => {
            put(`/pricelist/info/${props.title}`, {
              title: newTitle,
              img: imageUrl,
              heading: newHeading,
              description: newDescription,

            })
              .then(() => get("/pricelist/info/")
              .then((response) => props.setPriceInfo(response.data)))
              .finally(() => {
                uploadImage();
                props.handlePopUp();
              });
          }} >ändra</button>
        }

        <button className='formAbout-cancel-btn' onClick={() => props.handlePopUp()}>avbryt</button>
      </div>

    </form>
  )
}
