import React from 'react';
import './Dashboard.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import BaseMap from '../Views/Maps/BaseMap';
import Login from '../Views/UserForm/Login';
import Register from '../Views/UserForm/Register';

export default function App() {
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
