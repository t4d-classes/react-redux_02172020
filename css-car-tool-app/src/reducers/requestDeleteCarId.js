import { REQUEST_DELETE_CAR } from '../actions/requestDeleteCar';

export const requestDeleteCarId = (state = -1, action) => {

  if (action.type === REQUEST_DELETE_CAR) {
    return action.payload.carId;
  } else {
    return state;
  }

};