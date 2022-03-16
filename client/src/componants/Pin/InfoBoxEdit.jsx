import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../contexts/UserContext';
import './Pin.css';

export default function InfoBoxEdit({ title, description }) {
  const { handleSubmitNewPin } = useContext(UserContext);

  const [thisTitle, setThisTitle] = useState(title || '');
  const [thisDesc, setThisDesc] = useState(description || '');

  const onTitleChange = (e) => {
    setThisTitle(e.target.value);
  };

  const onDescChange = (e) => {
    setThisDesc(e.target.value);
  };

  // const [refReady, setRefReady] = useState(false);

  // const [newPin, setNewPin] = useState(null);
  // const [newPinLat, setNewPinLat] = useState(null);
  // const [newPinLng, setNewPinLng] = useState(null);
  // const [myMap, setMyMap] = useState();

  return (
    <form
      className="edit-location-popup"
      onSubmit={(e) => handleSubmitNewPin(e, thisTitle, thisDesc)}
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
        // placeholder="Enter a title..."
        value={thisTitle}
        onChange={onTitleChange}

      />
      <p className="label">Description</p>
      <textarea
        className="location-input"
        name="description"
        // placeholder="Say something about this place..."
        value={thisDesc}
        onChange={onDescChange}
      />
      <button type="submit" className="small-submit-btn">
        Add Pin
        {/* {editPlace && 'Save Changes'}
        {!editPlace && 'Add Pin'} */}
      </button>
    </form>

  );
}
