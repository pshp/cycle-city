/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './UserForm.css';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function Login() {
  const methods = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="user-form-page">
      <h1>Cycle City</h1>

      <FormProvider {...methods}>
        <form
          className="user-form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >

          <h2>Log in</h2>

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

          <SubmitButton type="submit" text="Log in" />

        </form>
      </FormProvider>

      <p>
        Don&apos;t have an account?
        {' '}
        <Link className="link" to="/register">Sign up</Link>
      </p>
    </div>
  );
}
