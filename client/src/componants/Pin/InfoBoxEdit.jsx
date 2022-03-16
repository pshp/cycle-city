import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../contexts/UserContext';
import './Pin.css';

export default function InfoBoxEdit({ title, description }) {
  const thisTitle = title || '';
  const thisDesc = description || '';

  // const [refReady, setRefReady] = useState(false);

  // const [newPin, setNewPin] = useState(null);
  // const [newPinLat, setNewPinLat] = useState(null);
  // const [newPinLng, setNewPinLng] = useState(null);
  // const [myMap, setMyMap] = useState();

  return (
    <form
      className="edit-location-popup"
    // onSubmit={(e) => handleSubmit(e)}
    >
      <CloseIcon
        className="icon-btns icon-btn close-btn"
        onClick={() => {
        // handleClickClose();
        }}
      />
      <p className="label">Title</p>
      <input
        className="location-input"
        name="title"
        placeholder="Enter a title..."
        value={thisTitle}

      />
      <p className="label">Description</p>
      <textarea
        className="location-input"
        name="description"
        placeholder="Say something about this place..."
        value={thisDesc}
        // onChange={(e) => handleDescChange(e.target.value)}
      />
      <button type="submit" className="small-submit-btn">
        Add Pin
        {/* {editPlace && 'Save Changes'}
        {!editPlace && 'Add Pin'} */}
      </button>
    </form>

  );
}
