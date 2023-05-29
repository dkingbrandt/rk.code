import React, { useState, useEffect } from 'react';
import './../scss/pages/cardModal.scss';
import { get, put } from './../utility/fetchHealper';
import Axios from 'axios';


export default function FormHome({handlePopUp,heading, title, description, setProjects}) {


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
            
          <input
            className="formAbout-icon"
            id="image"
            required
            type="file"
            name="file"
            placeholder="Ladda upp icon"
            onChange={(e) => { setImg(e.target.files[0]); }}
          />
          <label for="title">Title:</label>
          <input
            id='title'
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            placeholder={heading}
          />
          <label for="description">Description:</label>
          <textarea
            onChange={(e) => setNewDescription(e.target.value)}
            name=""
            id="description"
            placeholder={description}
            cols="30"
            rows="10"
          ></textarea>
        
          <button className='homeFormContainer-btn' onClick={()=> {

                put(`home/projects/${title}`, {
                  img: imageUrl,
                  title: newTitle,
                  heading: newTitle,
                  description: newDescription,
                })
                  .then(() => get("home/projects/")
                  .then((response) => setProjects(response.data))
                  .finally(() => {
                    uploadImage();
                    handlePopUp();
                  })
              );

            }}>Ändra</button>
        </form>
  
    </div>
  )
}

