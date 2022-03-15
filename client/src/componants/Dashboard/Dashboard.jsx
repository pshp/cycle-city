import React from 'react';
import './Dashboard.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Map from '../Map/Map';
import Login from '../UserForm/Login';
import Register from '../UserForm/Register';

export default function App() {
  return (
    <div className="Dashboard">
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="logout" element={<Logout />} /> */}
      </Routes>
    </div>
  );
}
