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
      <form className="signup-form" onSubmit={handleSumbit}>

        <h2>Sign Up</h2>

        <label htmlFor="first-name">
          First name *
          <input className="user-input" id="first-name" name="first-name" type="text" />
        </label>

        <label htmlFor="last-name">
          Last Name *
          <input className="user-input" id="last-name" name="last-name" type="text" />
        </label>

        <label htmlFor="email">
          Email *
          <input className="user-input" id="email" name="email" type="text" />
        </label>

        <label htmlFor="password">
          Password *
          <input className="user-input" id="password" name="password" type="text" />
        </label>

        <button className="submit-btn" type="submit">Sign Up</button>

      </form>
      <p>
        Already have an account?
        {' '}
        <Link className="link" to="/login">Log in</Link>
      </p>
    </div>
  );
}
