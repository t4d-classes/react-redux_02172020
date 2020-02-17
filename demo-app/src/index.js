import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = ['blue','red','black','green','orange','white'];


ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
