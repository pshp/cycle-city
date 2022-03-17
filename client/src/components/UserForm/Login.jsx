/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import './UserForm.css';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../../../FormInput/FormInput';
import SubmitButton from '../../../Buttons/SubmitButton';
import { loginUser } from '../../../../services/api-service';
import UserContext from '../../../../contexts/UserContext';

export default function Login() {
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);
  const { handleLoginSubmit } = useContext(UserContext);

  const methods = useForm();

  const onSubmit = (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    loginUser(body)
      .then((res) => {
        if (res.error) throw new Error(res.error);
        setCorrect(true);
        setError(false);
        handleLoginSubmit(res.data.email);
      })
      .catch((err) => {
        console.log(err);
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
          {correct && <p className="correct">Success</p>}
          {error && <p className="error">Wrong username or password</p>}
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
