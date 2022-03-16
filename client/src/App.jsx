import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Dashboard from './componants/Dashboard/Dashboard';
import UserContext from './contexts/UserContext';
import { getLocations, postLocation } from './services/api-service';

export default function App() {
  const userStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(null);
  const [locationsArray, setLocationsArray] = useState([]);

  const [newPin, setNewPin] = useState(null);
  const [newPinLat, setNewPinLat] = useState(null);
  const [newPinLng, setNewPinLng] = useState(null);

  useEffect(() => {
    getLocations()
      .then((locations) => {
        setLocationsArray(locations);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    console.log(locationsArray);
  }, [locationsArray]);

  const handleLoginSubmit = (username) => {
    userStorage.setItem('user', username);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const handleAddNewPin = (e) => {
    setNewPin(false);
    setNewPinLng(e.latlng.lng);
    setNewPinLat(e.latlng.lat);
    setNewPin(true);
  };

  const handleCancelNewPin = () => {
    setNewPin(false);
  };

  const handleSubmitNewPin = (e, title, desc) => {
    e.preventDefault();
    const newLocationInput = {
      username: userStorage.user,
      title,
      description: desc,
      latitude: newPinLat,
      longitude: newPinLng,
    };
    console.log(newLocationInput);
    postLocation(newLocationInput)
      .then((location) => {
        console.log(location);
        setLocationsArray((currLocations) => [...currLocations, location]);
        setNewPin(false);
      })
      .catch((error) => console.log(error));
  };

  const context = useMemo(() => ({
    locationsArray,
    newPin,
    handleLoginSubmit,
    handleLogout,
    handleAddNewPin,
    handleCancelNewPin,
    handleSubmitNewPin,
    currentUser,
    newPinLat,
    newPinLng,
  }), [currentUser, locationsArray, newPin, newPinLat, newPinLng]);

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
