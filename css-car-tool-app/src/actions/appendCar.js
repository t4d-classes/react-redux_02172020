import { push } from 'connected-react-router';

import { refreshCars } from './refreshCars';

export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';
export const APPEND_CAR_DONE = 'APPEND_CAR_DONE';

export const appendCarRequest = car => ({ type: APPEND_CAR_REQUEST, payload: { car } });
export const appendCarDone = car => ({ type: APPEND_CAR_DONE, payload: { car } });

export const appendCar = car => {

  return dispatch => {

    dispatch(appendCarRequest(car));
    return fetch('http://localhost:3050/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(cars => {
        dispatch(appendCarDone(cars));
        dispatch(refreshCars());
        dispatch(push('/cars'));
      });
  };

};