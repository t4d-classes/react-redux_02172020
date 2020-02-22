import { push } from 'connected-react-router';

export const VIEW_CAR = 'VIEW_CAR';

export const viewCar = carId => dispatch => {
  dispatch({ type: VIEW_CAR, payload: { carId }, });
  dispatch(push('/cars/' + encodeURIComponent(carId)));
};