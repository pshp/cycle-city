/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './UserForm.css';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../Buttons/SubmitButton';
import { registerUser } from '../../services/api-service';

export default function Register() {
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);

  const methods = useForm();

  const onSubmit = (data) => {
    const body = {
      firstName: data.firstName,
      lastName: data.firstName,
      email: data.email,
      password: data.password,
    };

    registerUser(body)
      .then((res) => {
        console.log(res);
        if (res.error) throw new Error(res.error);
        setCorrect(true);
        setError(false);
      })
      .catch((err) => {
        console.log('ERROR', err);
        setCorrect(false);
        setError(true);
      });
  };

  return (
    <div className="user-form-container">
      <h1>Cycle City</h1>

      <FormProvider {...methods}>
        <form
          className="user-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >

          <h2>Sign up</h2>

          <FormInput
            id="firstName"
            label="First name *"
            type="text"
          />

          <FormInput
            id="lastName"
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
          {correct && <p className="correct">Account created. Please log in</p>}
          {error && <p className="error">Something went wrong...</p>}
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
