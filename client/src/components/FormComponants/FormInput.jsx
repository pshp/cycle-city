/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './FormInput.css';
import { useFormContext } from 'react-hook-form';

export default function FormInput({ id, type, label }) {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <label className="form-input" htmlFor={id}>
      <p>{label}</p>
      <input className="form-input-field" id={id} type={type} {...register(id)} />
    </label>
  );
}
