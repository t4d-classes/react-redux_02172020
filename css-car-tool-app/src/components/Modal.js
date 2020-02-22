import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

export const Modal = ({ children, show }) => {
  return show && ReactDOM.createPortal(
    <div className="Modal">{children}</div>,
    document.querySelector('#modal')
  );
};