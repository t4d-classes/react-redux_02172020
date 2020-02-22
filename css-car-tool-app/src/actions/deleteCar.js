import { push } from 'connected-react-router';

import { refreshCars } from './refreshCars';

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE = 'DELETE_CAR_DONE';

export const deleteCarRequest = carId => ({ type: DELETE_CAR_REQUEST, payload: { carId } });
export const deleteCarDone = () => ({ type: DELETE_CAR_DONE });

export const deleteCar = carId => {

  return dispatch => {

    dispatch(deleteCarRequest(carId));
    return fetch('http://localhost:3050/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        dispatch(deleteCarDone());
        dispatch(refreshCars());
        dispatch(push('/cars'));
      });
  };

};