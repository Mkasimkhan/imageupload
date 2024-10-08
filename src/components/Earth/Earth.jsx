import React, { useState } from "react";
import ImageUploader from '../ImageUploader/ImageUploader';
import './Earth.css';
import  globe from '../../assets/newglobe.png'
import { useNavigate } from 'react-router-dom'; 

const Earth = () => {
  const [isUploaderOpen, setUploaderOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null); 
  const [showMessage, setShowMessage] = useState(false); 


  const navigate = useNavigate();
  const toggleUploader = () => {
    setUploaderOpen(!isUploaderOpen);
  };

  const handleTreeClick = () => {
    navigate('/gallery'); 
  };

  const handleSend = (image) => {
    setUploadedImage(image); 
    setShowAnimation(true);
    setUploaderOpen(false); 
  };


  const handleAnimationEnd = () => {
    setShowMessage(true); 
    setTimeout(() => setShowMessage(false), 3000);
    setShowAnimation(false); 
  };

  return (
    <div className="container">
      <div className="earth-container">
        <div className="earth" onClick={toggleUploader}><img src={globe} alt="" className="earthimg" /></div>
      </div>

      {isUploaderOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleUploader}>&times;</span>
            <ImageUploader onSend={handleSend} />
          </div>
        </div>
      )}

      
      {showAnimation && (
        <div
          id="box"
          style={{
            backgroundImage: `url(${uploadedImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
          }}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      )}
      <div className="treelink" onClick={handleTreeClick}></div>

     
      {showMessage && (
        <div className="upload-message">
          Your image has been uploaded!
        </div>
      )}
    </div>
  );
};

export default Earth;
