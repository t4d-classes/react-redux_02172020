import React from 'react';

import './DeleteButton.css';

import { Button } from './Button';

export const DeleteButton = ({ onClick }) =>
  <Button onClick={onClick} className="DeleteButton">Delete</Button>;