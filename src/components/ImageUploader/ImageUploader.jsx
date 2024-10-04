import React, { useState } from "react";
import './ImageUploader.css';

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
  "image/avif", 
];

const ImageUploader = ({ onSend }) => { 
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const validFileType = (file) => fileTypes.includes(file.type);

  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];

    if (!validFileType(uploadedFile) || uploadedFile.size > 2097152) {
      return; 
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      setImageName(uploadedFile.name);
    };
    reader.readAsDataURL(uploadedFile);
  };

  return (
    <div className="proof">
      <div className={`imgArea ${image ? 'active' : ''}`} data-title={imageName}>
        <input
          type="file"
          name="screenshoot"
          id="screenshoot"
          hidden
          accept="image/*"
          onChange={handleImageUpload}
        />
        {!image && <i className="fa-solid fa-cloud-arrow-up"></i>}
        {!image && <h4>Upload screenshot</h4>}
        {!image && <p>Image size must be less than <span>2MB</span></p>}
        {image && <img src={image} alt="Uploaded preview" />}
      </div>
      <button
        className="selectImage"
        onClick={() => {
          if (image) {
            onSend(image); // Pass the image URL to the parent
          } else {
            document.getElementById('screenshoot').click();
          }
        }}
      >
        {image ? "Send" : "Select Image"}
      </button>
    </div>
  );
};

export default ImageUploader;
