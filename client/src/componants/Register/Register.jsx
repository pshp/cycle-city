/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function Register() {
  const methods = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="signup-page">
      <h1>Cycle City</h1>

      <FormProvider {...methods}>
        <form
          className="signup-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >

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
            type="password"
          />

          <SubmitButton type="submit" text="Sign up" />

        </form>
      </FormProvider>

      <p>
        Already have an account?
        {' '}
        <Link className="link" to="/login">Log in</Link>
      </p>
    </div>
  );
}
