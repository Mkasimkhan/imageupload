import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

function Header() {
  const navigate = useNavigate();  // Initialize the navigation function

  const handleLoginClick = () => {
    navigate('/login');  // Redirect to the login page
  };

  const handleSignupClick = () => {
    navigate('/signup');  // Redirect to the signup page
  };

  return (
    <>
      <div className="header">
        <div className="buttons">
          <div className="login-btn" onClick={handleLoginClick}>Login</div>
          <div className="signup-btn" onClick={handleSignupClick}>Signup</div>
        </div>
        <div className="profile">
          {/* Profile section if needed */}
        </div>
      </div>
    </>
  );
}

export default Header;
