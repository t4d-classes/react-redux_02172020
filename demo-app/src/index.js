import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { calcToolStore } from './stores/calcToolStore';
// import { CalcToolContainer } from './containers/CalcToolContainer';

// ReactDOM.render(
//   <Provider store={calcToolStore}>
//     <CalcToolContainer />
//   </Provider>,
//   document.querySelector('#root'),
// );

// import { carToolStore } from './stores/carToolStore';
// import { CarToolContainer } from './containers/CarToolContainer';

// ReactDOM.render(
//   <Provider store={carToolStore}>
//     <CarToolContainer />
//   </Provider>,
//   document.querySelector('#root'),
// );

import { ColorTool } from './components/ColorTool';

const colorList = ['blue','red','black','green','orange','white'];

ReactDOM.render(
  <ColorTool colors={colorList} />,
  document.querySelector('#root'),
);
