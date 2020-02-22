import React from 'react';

import './Confirm.css';

import { Message } from './Message';

export const Confirm = ({ prompt, onConfirm }) => {

  return <form className="Confirm">
    <Message>{prompt}</Message>
    <div className="Buttons">
      <button type="button" onClick={() =>
        onConfirm(true)}>Yes</button>
      <button type="button" onClick={() =>
        onConfirm(false)}>No</button>
    </div>
  </form>;

};