/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../../contexts/UserContext';
import './PopupBox.css';
import EditIcon from '../../../assets/edit-icon.png';
import DeleteIcon from '../../../assets/delete-icon.png';

export default function PopupBox({
  myMap,
  pinId,
  title,
  desc,
  username,
}) {
  const { handleDeletePin, handleEditPin } = useContext(UserContext);

  const handleClosePin = () => {
    myMap.closePopup();
  };

  return (
    <div className="popup-box">
      <div className="popup-btns">
        <div
          className="popup-btn popup-close-btn"
          onClick={handleClosePin}
        >
          ✕
        </div>

        <div
          className="popup-btn popup-edit-btn"
          onClick={(e) => handleEditPin(pinId)}
        >
          <img alt="edit" className="icon-image" src={EditIcon} />
        </div>

        <div
          className="popup-btn popup-delete-btn"
          onClick={(e) => handleDeletePin(pinId)}
        >
          <img alt="delete" className="icon-image" src={DeleteIcon} />
        </div>

      </div>
      <p className="infobox-label">Title</p>
      <p>{title}</p>
      <p className="infobox-label">Description</p>
      <p>{desc}</p>
      <p className="info-username">
        Created by
        {' '}
        <b>{username}</b>
      </p>
    </div>

  );
}
