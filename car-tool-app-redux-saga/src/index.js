import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';

import { CarTool } from './components/CarTool';

ReactDOM.render(
  <Provider store={carToolStore}>
    <CarTool headerText="Car Tool" />
  </Provider>,
  document.querySelector('#root'),
);
