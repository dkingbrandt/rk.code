import React, { useState, useEffect } from 'react';
import './../scss/pages/cardModal.scss';
import { get, post } from './../utility/fetchHealper';
import Axios from 'axios';


export default function FormAddProject({handlePopUp, setProjects, textHeading, link}) {


  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
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

    post(link, {
      img: imageUrl,
      title: newTitle,
      heading: newTitle,
      description: newDescription,
    })
      .then(() => get(link)
        .then((response) => setProjects(response.data))
        .finally(() => {
          uploadImage();
          handlePopUp();
        })
      );

    

  };


  
  return (
    <div>
      <form className='homeFormContainer' onSubmit={handleSubmit}>

          <h1>{textHeading}</h1>
            <input
              className="formAbout-icon"
              id="image"
              required
              type="file"
              name="file"
              placeholder="Ladda upp icon"
              onChange={(e) => { setImg(e.target.files[0]); }}
            />
            <label for="title">Titel:</label>
            <input
              required
              id='title'
              type="text"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label for="description">Beskrivning:</label>
            <textarea
              required
              name=""
              id="description"
              placeholder="Skriv en beskrivning..."
              cols="30"
              rows="10"
              onChange={(e) => setNewDescription(e.target.value)}

            ></textarea>
        
            <button type="submit" className='homeFormContainer-btn'>Lägg till</button>
        </form>
  
    </div>
  )
}

