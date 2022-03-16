import React, { useEffect, useState, useMemo } from 'react';
import {
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Dashboard from './componants/Dashboard/Dashboard';
import UserContext from './contexts/UserContext';
import { getLocations } from './services/api-service';

export default function App() {
  const userStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(null);
  const [locationsArray, setLocationsArray] = useState([]);

  useEffect(() => {
    getLocations()
      .then((locations) => {
        setLocationsArray(locations);
      })
      .catch((e) => console.log(e));
  }, []);

  // useEffect(() => {
  //   console.log(locationsArray);
  // }, [locationsArray]);

  const handleLoginSubmit = (username) => {
    userStorage.setItem('user', username);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const context = useMemo(() => ({
    handleLoginSubmit,
    handleLogout,
    currentUser,
  }), [currentUser]);

  return (
    <UserContext.Provider value={context}>
      <div className="App">
        <BrowserRouter>
          <Dashboard />
          <Navbar />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}
