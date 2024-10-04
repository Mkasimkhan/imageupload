// src/App.js
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Screen from './components/Screen/Screen';
// import SignupPage from './components/SignupPage/SignupPage';
// import LoginPage from './components/LoginPage/LoginPage';
// import Profile from './pages/Profile/Profile';
// import Gallery from './components/Gallery/Gallery';
import Earth from './components/Earth/Earth';


function App() {
  return (
    <div className="app">
      <Earth/>
      </div>
  );
}

export default App;
{/* <Route path="/profile" element={<Profile />} />   */}

{/* <Router>
</Router> */}
{/* <Routes>
  <Route path="/" element={<Screen />} />
  <Route path="/signup" element={<SignupPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/gallery" element={<Gallery/>} />
</Routes> */}