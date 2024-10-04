import React from "react";
import imageData from "./imageData"; // Adjust the path based on your folder structure
import "./Gallery.css"; // Import the CSS file

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery-grid">
        {imageData.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.url} alt={image.name} className="image" />
            <h3 className="image-title">{image.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
