import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';

export default function Register() {
  const handleSumbit = (e) => {
    e.preventDeafault();
  };

  return (
    <div className="signup-page">
      <h1>Cycle City</h1>
      <form className="signup-form" onSubmit={handleSumbit}>

        <h2>Sign Up</h2>

        <FormInput
          id="first-name"
          label="First name *"
          type="text"
        />

        <FormInput
          id="last-name"
          label="Last name *"
          type="text"
        />

        <FormInput
          id="email"
          label="Email *"
          type="text"
        />

        <FormInput
          id="password"
          label="Password *"
          type="text"
        />

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
