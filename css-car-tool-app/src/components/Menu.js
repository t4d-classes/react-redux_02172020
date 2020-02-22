import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

export const Menu = props => {

  return <nav className="Menu">
    <ul>
      {props.menuItems.map( (menuItem, i) => <li key={i}>
        <Link to={menuItem.url}>{menuItem.label}</Link>
      </li>)}
    </ul>
  </nav>;


};