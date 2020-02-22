import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import './App.css';

import { appStore, history } from './appStore';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <ConnectedRouter history={history}>
          <Layout />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
