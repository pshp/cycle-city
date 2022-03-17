/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../../contexts/UserContext';
import './PopupBox.css';

export default function PopupBoxEdit({ title, description }) {
  const { handleSubmitNewPin, handleCancelNewPin } = useContext(UserContext);

  const [thisTitle, setThisTitle] = useState(title || '');
  const [thisDesc, setThisDesc] = useState(description || '');

  const onTitleChange = (e) => {
    setThisTitle(e.target.value);
  };

  const onDescChange = (e) => {
    setThisDesc(e.target.value);
  };

  return (
    <form
      className="edit-location-popup"
      onSubmit={(e) => handleSubmitNewPin(e, thisTitle, thisDesc)}
    >
      <div
        className="popup-btns popup-btn popup-close-btn"
        onClick={handleCancelNewPin}
      >
        ✕
      </div>
      <p className="infobox-label">Title</p>
      <input
        autoFocus
        className="location-input"
        name="title"
        // placeholder="Enter a title..."
        value={thisTitle}
        onChange={onTitleChange}

      />
      <p className="infobox-label">Description</p>
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
