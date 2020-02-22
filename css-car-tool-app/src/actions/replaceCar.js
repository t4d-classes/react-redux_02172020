import { push } from 'connected-react-router';

import { refreshCars } from './refreshCars';

export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE = 'REPLACE_CAR_DONE';

export const replaceCarRequest = car => ({ type: REPLACE_CAR_REQUEST, payload: { car } });
export const replaceCarDone = car => ({ type: REPLACE_CAR_DONE, payload: { car } });

export const replaceCar = car => {

  return dispatch => {

    dispatch(replaceCarRequest(car));
    return fetch('http://localhost:3050/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(res => res.json())
      .then(cars => {
        dispatch(replaceCarDone(cars));
        dispatch(refreshCars());
        dispatch(push('/cars'));
      });
  };

};