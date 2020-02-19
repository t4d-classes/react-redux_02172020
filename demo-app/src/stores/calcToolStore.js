import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calc-tool-reducers';

export const calcToolStore = createStore(calcToolReducer);
