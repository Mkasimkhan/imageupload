import React, { useState } from "react";
import ImageUploader from '../ImageUploader/ImageUploader'; // Import the ImageUploader component
import './Earth.css';

const Earth = () => {
  const [isUploaderOpen, setUploaderOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false); // State for showing animation

  const toggleUploader = () => {
    setUploaderOpen(!isUploaderOpen);
  };

  const handleSend = () => {
    setShowAnimation(true);
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

      {/* Animation box */}
      {showAnimation && <div id="box">Sending...</div>}
    </div>
  );
};

export default Earth;
