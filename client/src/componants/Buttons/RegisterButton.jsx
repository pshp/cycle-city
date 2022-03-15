import React from 'react';
import './RegisterButton.css';

export default function RegisterButton({ text }) {
  return (
    <button className="register-btn" type="submit">{text}</button>
  );
}
