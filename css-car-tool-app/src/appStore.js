import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';

import { cars } from './reducers/cars';
import { editCarId } from './reducers/editCarId';
import { requestDeleteCarId } from './reducers/requestDeleteCarId';
import { isLoading } from './reducers/isLoading';

export const history = createBrowserHistory();

export const appStore = createStore((combineReducers({
  router: connectRouter(history),
  cars, editCarId, requestDeleteCarId, isLoading,
})), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));

