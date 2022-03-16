import React, { useState } from 'react';
import './BaseMap.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import Room from '@mui/icons-material/Room';
// import L from 'leaflet';
import PinList from '../PinList/PinList';
import Pin from '../Pin/Pin';
import PinNew from '../Pin/PinNew';
// import PinSvg from '../../assets/pin.svg';

export default function BaseMap() {
  const [newPin, setNewPin] = useState(null);
  const [newPinLat, setNewPinLat] = useState(null);
  const [newPinLng, setNewPinLng] = useState(null);

  const position = [52.51051, 13.46104];

  const onClick = (e) => {
    setNewPinLng(e.latlng.lng);
    setNewPinLat(e.latlng.lat);
    setNewPin(true);
  };

  return (
    <MapContainer
      className="map-container "
      center={position}
      zoom={13}
      whenCreated={(map) => {
        map.on('click', onClick);
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinList />
      {newPin && (
        <PinNew lat={newPinLat} lng={newPinLng} />
      )}
    </MapContainer>

  );
}
