import React, { useState, useEffect } from 'react';
import './../scss/pages/cardModal.scss';
import { get, put } from './../utility/fetchHealper';
import Axios from 'axios';


export default function FormInfoHome({handlePopUp,heading, title, description, setInfo}) {


  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
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
      newDescription.trim() === ''
    ) {
      alert('Field cannot be empty');
      return;
    }

  };
  
  return (
    
    <div>
      <form className='homeFormContainer' onSubmit={handleSubmit}>
        {console.log(title)
        }
        <label for="title">Ladda upp en fil:</label>
        <input
          className="formAbout-icon"
          id="image"
          required
          type="file"
          name="file"
          placeholder="Ladda upp icon"
          onChange={(e) => {setImg(e.target.files[0]);}}
        />
            
        <label for="title">Title:</label>
        <input
          id='title' value={newTitle}
          type="text"
          placeholder={heading}
          onChange={(e) => setNewTitle(e.target.value)}
        />


        <label for="description">Description:</label>
        <textarea
          name=""
          id="description"
          placeholder={description}
          cols="30"
          rows="10"
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
            
        <button className='homeFormContainer-btn' onClick={() => {

                put(`home/info/${title}`, {
                  img:imageUrl,
                  title: newTitle,
                  heading: newTitle,
                  description: newDescription,
                })
                  .then(() => get("home/info/")
                  .then((response) => setInfo(response.data))
                  .finally(() => {
                      uploadImage();
                      handlePopUp();
                  })
              )
               
            }}>Ändra</button>
        </form>
  
    </div>
  )
}

