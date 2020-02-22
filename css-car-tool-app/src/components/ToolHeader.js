import React from 'react';

import './ToolHeader.css';

export const ToolHeader = ({ logo, title }) => {

  return <header className="ToolHeader">
    <img src={logo} alt={title + ' Logo'} />
    <h1>{title}</h1>
  </header>;

};