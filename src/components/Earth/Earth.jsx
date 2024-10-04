import React, { useState } from "react";
import ImageUploader from '../ImageUploader/ImageUploader'; 
import './Earth.css';

const Earth = () => {
  const [isUploaderOpen, setUploaderOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false); 
  const [uploadedImage, setUploadedImage] = useState(null); // Store the uploaded image URL

  const toggleUploader = () => {
    setUploaderOpen(!isUploaderOpen);
  };

  const handleSend = (image) => {
    setUploadedImage(image); // Store the uploaded image URL
    setShowAnimation(true);
    setUploaderOpen(false); // Close the modal
    setTimeout(() => setShowAnimation(false), 5000); // Animation lasts for 5 seconds
  };

  return (
    <div className="container">
      <div className="earth-container">
        <div className="earth" onClick={toggleUploader}></div>
      </div>
      
      {isUploaderOpen && ( 
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleUploader}>&times;</span>
            <ImageUploader onSend={handleSend} />
          </div>
        </div>
      )}

      {/* Animation box with background image */}
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
        >
          
        </div>
      )}
    </div>
  );
};

export default Earth;
