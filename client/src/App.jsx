import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
      <Link to="/logout">logout</Link>
    </div>
  );
}
