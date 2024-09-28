import React, { useState } from 'react';
import './Uploader.css';
import { IoIosArrowForward } from "react-icons/io";

const Uploader = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState("");
  const [buttonRound, setButtonRound] = useState(false); // For button animation state

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image && image.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setImageName(image.name);
        setButtonRound(true); // Make the button round and change its content
      };
      reader.readAsDataURL(image);
    } else {
      alert("Image size more than 2MB");
    }
  };

  return (
    <div className="container">
      <input
        type="file"
        id="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />
      <div className={`img-area ${imagePreview ? 'active' : ''}`} data-img={imageName}>
        {!imagePreview && <i className='bx bxs-cloud-upload icon'></i>}
        {!imagePreview && <h3>Upload Image</h3>}
        {!imagePreview && <p>Image size must be less than <span>2MB</span></p>}
        {imagePreview && <img src={imagePreview} alt="Preview" />}
      </div>

      {/* Conditional Button */}
      <button
        className={`select-image ${buttonRound ? 'round' : ''}`}
        onClick={() => document.getElementById('file').click()}
      >
        {buttonRound ? (
          <IoIosArrowForward className="arrow-icon" />
        ) : (
          "Select Image"
        )}
      </button>
    </div>
  );
};

export default Uploader;
