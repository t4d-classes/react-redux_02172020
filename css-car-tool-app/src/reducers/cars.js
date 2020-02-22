import { REFRESH_CARS_DONE } from '../actions/refreshCars';

export const cars = (state = [], action) => {

  switch(action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    default:
      return state;
  }

};