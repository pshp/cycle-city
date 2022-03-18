import React, { useContext, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import './PopupBox.css';

export default function PopupBoxEdit({ pinId, title, desc }) {
  const {
    editPin,
    handleCancelNewPin,
    handleSubmitNewPin,
    handleCancelEditPin,
    handleSubmitEditPin,
  } = useContext(UserContext);

  const [thisTitle, setThisTitle] = useState(title || '');
  const [thisDesc, setThisDesc] = useState(desc || '');

  const onTitleChange = (e) => {
    setThisTitle(e.target.value);
  };

  const onDescChange = (e) => {
    setThisDesc(e.target.value);
  };

  const routeSumbit = (e) => {
    e.preventDefault();
    if (editPin) handleSubmitEditPin(pinId, thisTitle, thisDesc);
    else handleSubmitNewPin(thisTitle, thisDesc);
  };

  const routeCancel = (e) => {
    e.preventDefault();
    if (editPin) handleCancelEditPin();
    else handleCancelNewPin();
  };

  return (
    <form
      className="edit-location-popup"
      onSubmit={routeSumbit}
    >
      <div
        className="popup-btns popup-btn popup-close-btn"
        onClick={routeCancel}
        aria-hidden="true"
      >
        ✕
      </div>
      <p className="infobox-label">Title</p>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        className="location-input"
        name="title"
        value={thisTitle}
        onChange={onTitleChange}

      />
      <p className="infobox-label">Description</p>
      <textarea
        className="location-input"
        name="description"
        value={thisDesc}
        onChange={onDescChange}
      />
      <button type="submit" className="small-submit-btn">
        {editPin && 'Save Changes'}
        {!editPin && 'Add Pin'}
      </button>
    </form>

  );
}
