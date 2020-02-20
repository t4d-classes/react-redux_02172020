import { createStore } from 'redux';

import { carToolReducer } from '../reducers/car-tool-reducers';

export const carToolStore = createStore(carToolReducer);
