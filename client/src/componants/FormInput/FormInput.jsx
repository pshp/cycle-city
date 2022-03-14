import React from 'react';
import './FormInput.css';

export default function FormInput({ id, type, label }) {
  return (
    <label className="form-input" htmlFor={id}>
      <p>{label}</p>
      <input className="form-input-field" id={id} name={id} type={type} />
    </label>
  );
}
