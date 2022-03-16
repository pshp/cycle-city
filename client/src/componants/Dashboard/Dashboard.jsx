// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './Dashboard.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import BaseMap from '../Maps/BaseMap';
import Login from '../UserForm/Login';
import Register from '../UserForm/Register';
// import UserContext from '../../contexts/UserContext';

export default function App() {
  // const { currentUser } = useContext(UserContext);

  return (

    <div className="Dashboard">
      <Routes>
        <Route path="/" element={<BaseMap />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}
