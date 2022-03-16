import React from 'react';
import './BaseMap.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import Room from '@mui/icons-material/Room';
// import L from 'leaflet';
import PinList from '../PinList/PinList';
// import PinSvg from '../../assets/pin.svg';

export default function BaseMap() {
  const position = [52.51051, 13.46104];

  return (
    <MapContainer className="map-container " center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinList />
    </MapContainer>

  );
}
