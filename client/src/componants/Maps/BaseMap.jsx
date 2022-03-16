import React, { useState, useContext } from 'react';
import './BaseMap.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import Room from '@mui/icons-material/Room';
// import L from 'leaflet';
import PinList from '../PinList/PinList';
// import Pin from '../Pin/Pin';
import PinNew from '../Pin/PinNew';
import UserContext from '../../contexts/UserContext';
// import PinSvg from '../../assets/pin.svg';

export default function BaseMap() {
  const {
    handleAddNewPin, newPin, newPinLat, newPinLng,
  } = useContext(UserContext);

  const [myMap, setMyMap] = useState();

  const position = [52.51051, 13.46104];

  return (
    <MapContainer
      className="map-container "
      center={position}
      zoom={13}
      whenCreated={(map) => {
        setMyMap(map);
        map.on('click', handleAddNewPin);
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
