import React from 'react';
import './Auth.css';

function Auth({ type }) {
  return (
    <div className="auth"><div className="auth-container">
    <h2 className="auth-title">{type === 'login' ? 'Login' : 'Signup'}</h2>
    <form className="auth-form">
      {type === 'signup' && (
        <input type="text" placeholder="Username" className="auth-input" />
      )}
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <a className='decision' href="">
      {type === 'login' ? 'Create a new Account' : 'Already have an Account'}
      </a>
      <button type="submit" className="auth-btn">
        {type === 'login' ? 'Login' : 'Signup'}
      </button>
    </form>
  </div>
  </div>
  );
}

export default Auth;
