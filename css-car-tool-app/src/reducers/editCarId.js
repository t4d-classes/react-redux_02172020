import { EDIT_CAR } from '../actions/editCar';
import { VIEW_CAR } from '../actions/viewCar';
import { REQUEST_DELETE_CAR } from '../actions/requestDeleteCar';
import { REFRESH_CARS_REQUEST } from '../actions/refreshCars';

export const editCarId = (state = -1, action) => {

  switch(action.type) {
    case EDIT_CAR:
      return action.payload.carId;
    case REFRESH_CARS_REQUEST:
    case REQUEST_DELETE_CAR:
    case VIEW_CAR:
      return -1;
    default:
      return state;
  }

};