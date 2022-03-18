import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PopupBoxEdit from '../PopupBox/PopupBoxEdit';
import UserContext from '../../../contexts/UserContext';

export default function PinNew({
  myMap, isActive, lat, lng,
}) {
  const { handleCancelNewPin, handleCancelEditPin } = useContext(UserContext);
  const [refReady, setRefReady] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    if (refReady && isActive) {
      popupRef.current.openOn(myMap);
    }
  }, [isActive, refReady, myMap]);

  useEffect(() => { handleCancelEditPin(); }, []);

  useEffect(() => () => { handleCancelNewPin(); }, []);

  const position = [lat, lng];

  const myIcon = L.divIcon({
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -32],
    html: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 492.452 492.452" style="enable-background:new 0 0 492.452 492.452;" xml:space="preserve">
    <path id="XMLID_152_" d="M246.181,0C127.095,0,59.533,102.676,84.72,211.82c17.938,77.722,126.259,280.631,161.462,280.631
      c32.892,0,143.243-202.975,161.463-280.631C432.996,103.74,365.965,0,246.181,0z M246.232,224.97
      c-34.38,0-62.244-27.863-62.244-62.244c0-34.381,27.864-62.244,62.244-62.244c34.38,0,62.244,27.863,62.244,62.244
      C308.476,197.107,280.612,224.97,246.232,224.97z"/>
    </svg>`,
    className: 'marker-pin-new',
  });

  return (
    <Marker
      icon={myIcon}
      position={position}
    >
      <Popup
        closeButton={false}
        ref={(r) => {
          popupRef.current = r;
          setRefReady(true);
        }}
      >
        <PopupBoxEdit />

      </Popup>
    </Marker>
  );
}
