/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import UserContext from '../../../contexts/UserContext';
import './PopupBox.css';

export default function PopupBox({
  pinId, title, desc, username,
}) {
  return (
    <div>
      {/* <CloseIcon
        className="icon-btns icon-btn close-btn"
        onClick={handleCancelNewPin}
      /> */}
      <p className="infobox-label">Title</p>
      <p>{title}</p>
      <p className="infobox-label">Description</p>
      <p>{desc}</p>
    </div>

  );
}
