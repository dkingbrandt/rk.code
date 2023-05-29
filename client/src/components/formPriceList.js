





import React, { useState, useEffect } from 'react';
import '../scss/pages/formAboutus.scss'
import { post, put, get } from '../utility/fetchHealper'
import Axios from 'axios';


export default function FormPriceList(props) {
  const [newHeading, setNewHeading] = useState(props.heading)
  const [newTitle, setNewTitle] = useState(props.title)
  const [newDescription, setNewDescription] = useState(props.descriptionList)
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


  const handleDescriptionChange = (e) => {
    const descriptionValue = e.target.value;
    const descriptionArray = descriptionValue.split('\n'); // Split textarea value on line breaks

    setNewDescription(descriptionArray);
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
      {console.log(imageUrl)}

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
        required
        placeholder={props.description}
        onChange={handleDescriptionChange}
      ></textarea>

      <div className='formAbout-btn-container'>
        {props.add &&
          <button className='formAbout-save-btn' onClick={() => {
              post("/pricelist/package", {
                title: newTitle,
                img: imageUrl,
                heading: newHeading,
                description: newDescription,

              })
                .then(() => get("/pricelist/package/")
                .then((response) => props.setPricePackage(response.data)))
                .finally(() => {
                  uploadImage();
                  props.handlePopUp();
                  props.handleCloseModals();
                });
           }} >skapa</button>
        }

        {!props.add &&
          <button className='formAbout-save-btn' onClick={() => {
            put(`/pricelist/package/${props.title}`, {
              title: newTitle,
              img: imageUrl,
              heading: newHeading,
              description: newDescription,

            })
              .then(() => get("/pricelist/package/")
              .then((response) => props.setPricePackage(response.data)))
              .finally(() => {
                uploadImage();
                props.handlePopUp();
                props.handleCloseModals();
              });
          }} >ändra</button>
        }

        <button className='formAbout-cancel-btn' onClick={() => props.handlePopUp()}>avbryt</button>
      </div>
    </form>
  )
}
