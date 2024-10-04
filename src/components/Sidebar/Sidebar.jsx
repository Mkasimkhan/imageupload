import React from 'react';
import './Sidebar.css';
import { IoMdGlobe } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Sidebar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGlobeClick = () => {
    navigate('/gallery'); // Navigate to /gallery when clicked
  };

  return (
    <>
      <div className="sidebar">
        <div className="btns">
          <div className="globe-btn" onClick={handleGlobeClick}> {/* Add onClick */}
            <IoMdGlobe className='icon'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
