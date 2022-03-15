import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './componants/Navbar/Navbar';
import Dashboard from './componants/Dashboard/Dashboard';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
