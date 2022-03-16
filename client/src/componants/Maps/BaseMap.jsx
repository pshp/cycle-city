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
  const [refReady, setRefReady] = useState(false);

  const [newPin, setNewPin] = useState(null);
  const [newPinLat, setNewPinLat] = useState(null);
  const [newPinLng, setNewPinLng] = useState(null);
  const [myMap, setMyMap] = useState();

  const position = [52.51051, 13.46104];

  const onClick = (e) => {
    setNewPin(false);
    setNewPinLng(e.latlng.lng);
    setNewPinLat(e.latlng.lat);
    setNewPin(true);
    // console.log(e.target.openPop);
  };

  return (
    <MapContainer
      className="map-container "
      center={position}
      zoom={13}
      whenCreated={(map) => {
        setMyMap(map);
        map.on('click', onClick);
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinList />
      {newPin && (
        <PinNew
          isActive
          map={myMap}
          lat={newPinLat}
          lng={newPinLng}
        />
      )}
    </MapContainer>

  );
}
