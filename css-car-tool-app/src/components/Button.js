import React from 'react';

import './Button.css';

export const Button = ({ className, onClick, children }) => {

  const classNames = [ 'Button' ];
  if (className) {
    classNames.push(className);
  }

  return <button type="button"
    className={classNames.join(' ')}
    onClick={onClick}>{children}</button>;

};