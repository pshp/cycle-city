import React from 'react';
import './BaseMap.css';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Room from '@mui/icons-material/Room';
import L from 'leaflet';
import { SvgIcon } from '@mui/material';

export default function BaseMap() {
  const position = [51.505, -0.09];

  // const myIcon = L.icon({
  //   icon: Room,
  //   iconSize: [64, 64],
  //   // iconAnchor: [32, 64],
  //   // popupAnchor: null,
  //   // shadowUrl: null,
  //   // shadowSize: null,
  //   // shadowAnchor: null
  // });

  return (
    <MapContainer className="map-container " center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Room position={position}>
        <Popup>

          A pretty CSS3 popup.
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Room>
    </MapContainer>

  );
}
