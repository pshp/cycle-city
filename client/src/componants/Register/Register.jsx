import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  const handleSumbit = (e) => {
    e.preventDeafault();
  };

  return (
    <div className="signup-page">
      <h1>Cycle City</h1>
      <form onSubmit={handleSumbit} className="user-form signup-form">
        <h2>Sign Up</h2>
        <p>First name *</p>
        <input type="text" />
        <p>Last Name *</p>
        <input type="text" />
        <p>Email *</p>
        <input type="text" />
        <p>Password *</p>
        <input type="text" />
        <button className="submit-btn" type="submit">Sign Up</button>
      </form>
      Already have an account?
      {' '}
      <span><Link to="/login">Log in</Link></span>
    </div>
  );
}
