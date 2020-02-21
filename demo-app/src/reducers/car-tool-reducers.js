import {
  EDIT_CAR, CANCEL_CAR, TOGGLE_CAR,
  TOGGLE_ALL_CARS, SORT_COL, REFRESH_CARS_DONE,
}
from '../actions/car-tool-actions';

const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    default:
      return cars;
  }

};

const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR) {
    return action.payload.carId;
  }

  if (action.type === REFRESH_CARS_DONE || action.type === CANCEL_CAR) {
    return -1;
  }

  return editCarId;

};

const selectedCarIdsReducer = (selectedCarIds = [], action, carIds) => {

  if (action.type === TOGGLE_ALL_CARS) {
    if (selectedCarIds.length > 0) {
      return [];
    } else {
      return carIds.concat();
    }
  }

  if (action.type === TOGGLE_CAR) {

    if (selectedCarIds.includes(action.payload.carId)) {
      return selectedCarIds.filter(carId => carId !== action.payload.carId);
    } else {
      return selectedCarIds.concat(action.payload.carId);
    }

  }

  if (action.type === REFRESH_CARS_DONE) {
    return [];
  }

  return selectedCarIds;  

};

const sortColReducer = (colName = '', action) => {

  if (action.type === SORT_COL) {
    return action.payload.colName;
  }

  return colName;

};

export const carToolReducer = (state = {}, action) => {
  return {
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action),
    selectedCarIds: selectedCarIdsReducer(
      state.selectedCarIds,
      action,
      state.cars ? state.cars.map(c => c.id) : [],
    ),
    sortCol: sortColReducer(state.sortCol, action),
  };
};
