import React from 'react';
import './App.css';
import Screen from './components/Screen/Screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for the main screen */}
          <Route path="/" element={<Screen />} />

          {/* Route for signup page */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Route for login page */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
