import React from 'react';
import './SubmitButton.css';

export default function SubmitButton({ text }) {
  return (
    <button className="submit-btn" type="submit">{text}</button>
  );
}
