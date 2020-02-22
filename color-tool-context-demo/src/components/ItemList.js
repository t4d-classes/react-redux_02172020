import React from 'react';

export const ItemList = ({ items }) => {

  return <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>;
};