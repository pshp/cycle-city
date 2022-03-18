import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import UserContext from './contexts/UserContext';
import {
  getLocations, postLocation, deleteLocation, editLocation,
} from './services/api-service';

export default function App() {
  const userStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(null);
  const [locationsArray, setLocationsArray] = useState([]);
  const [newPin, setNewPin] = useState(null);
  const [newPinLat, setNewPinLat] = useState(null);
  const [newPinLng, setNewPinLng] = useState(null);
  const [newPinId, setNewPinId] = useState(null);
  const [editPin, setEditPin] = useState(null);
  const [loginDisplayed, setLoginDisplayed] = useState(false);

  // remove new pin id
  useEffect(() => {
    getLocations()
      .then((locations) => {
        setLocationsArray(locations);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleLoginSubmit = (username) => {
    userStorage.setItem('user', username);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const loginViewMounted = () => {
    setLoginDisplayed(true);
  };

  const loginViewUnmounted = () => {
    setLoginDisplayed(false);
  };

  const handleAddNewPin = (e) => {
    if (!currentUser) return;
    setNewPin(false);
    setNewPinLng(e.latlng.lng);
    setNewPinLat(e.latlng.lat);
    setNewPin(true);
  };

  const handleCancelNewPin = () => {
    setNewPin(false);
  };

  const handleSubmitNewPin = (title, desc) => {
    const newLocationInput = {
      username: userStorage.user,
      title,
      description: desc,
      latitude: newPinLat,
      longitude: newPinLng,
    };
    postLocation(newLocationInput)
      .then((location) => {
        setLocationsArray((currLocations) => [...currLocations, location]);
        setNewPin(false);
        setNewPinId(location._id);
      })
      .catch((error) => console.log(error));
  };

  const handleDeletePin = (pinId) => {
    deleteLocation(pinId)
      .then(() => {
        const newLocations = locationsArray.filter((el) => el._id !== pinId);
        setLocationsArray(newLocations);
      })
      .catch((e) => console.log(e));
  };

  const handleEditPin = () => {
    setEditPin(true);
  };

  const handleCancelEditPin = () => {
    setEditPin(false);
  };

  const handleSubmitEditPin = (pinId, title, desc) => {
    const body = {
      title,
      description: desc,
    };
    editLocation(pinId, body)
      .then(() => {
        const newLocations = locationsArray.map((el) => {
          const newEl = el;
          if (newEl._id === pinId) {
            newEl.title = title;
            newEl.description = desc;
          }
          return newEl;
        });
        setLocationsArray(newLocations);
        setEditPin(false);
      })
      .catch((e) => console.log(e));
  };

  const handleDragPin = (pinId, lat, lng) => {
    const body = {
      latitude: lat,
      longitude: lng,
    };
    editLocation(pinId, body)
      .then(() => {
        const newLocations = locationsArray.map((el) => {
          const newEl = el;
          if (newEl._id === pinId) {
            newEl.latitude = lat;
            newEl.longitude = lng;
          }
          return newEl;
        });
        setLocationsArray(newLocations);
      })
      .catch((e) => console.log(e));
  };

  const context = useMemo(() => ({

    handleLoginSubmit,
    handleLogout,
    handleAddNewPin,
    handleCancelNewPin,
    handleSubmitNewPin,
    handleDeletePin,
    handleEditPin,
    handleCancelEditPin,
    handleSubmitEditPin,
    setLoginDisplayed,
    loginViewMounted,
    loginViewUnmounted,
    handleDragPin,
    locationsArray,
    newPin,
    loginDisplayed,
    currentUser,
    newPinLat,
    newPinLng,
    newPinId,
    editPin,
  }), [
    locationsArray,
    newPin,
    loginDisplayed,
    currentUser,
    newPinLat,
    newPinLng,
    newPinId,
    editPin,
    userStorage,
  ]);

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
