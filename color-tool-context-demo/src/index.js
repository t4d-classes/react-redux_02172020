import React from 'react';
import ReactDOM from 'react-dom';

import { ColorStore, connectToColorStore } from './ColorStore';
import App from './App';

const ConnectedApp = connectToColorStore(App);

ReactDOM.render(
  <ColorStore>
    <ConnectedApp />
  </ColorStore>,
  document.getElementById('root'),
);

