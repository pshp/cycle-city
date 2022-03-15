import React from 'react';
import './LoginButton.css';

export default function LoginButton({ text }) {
  return (
    <button className="login-btn" type="submit">{text}</button>
  );
}
