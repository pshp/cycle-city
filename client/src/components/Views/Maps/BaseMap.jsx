import React, { useState, useContext } from 'react';
import './BaseMap.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PinList from '../../MapComponants/PinList/PinList';
import PinNew from '../../MapComponants/Pin/PinNew';
import UserContext from '../../../contexts/UserContext';

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
      <PinList myMap={myMap} />
      {newPin && (
        <PinNew
          isActive
          myMap={myMap}
          lat={newPinLat}
          lng={newPinLng}
        />
      )}
    </MapContainer>

  );
}
