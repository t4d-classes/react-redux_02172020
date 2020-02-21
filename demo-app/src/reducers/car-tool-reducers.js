import {
  EDIT_CAR, CANCEL_CAR, TOGGLE_CAR,
  TOGGLE_ALL_CARS, SORT_COL, REFRESH_CARS_DONE,
}
from '../actions/car-tool-actions';

// reducers follow the pattern:
// newState = reducerFn(currentState, action)
// every action must have a type property and an optional payload
// property with data
const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    // if an action does not need to be handled by the 
    // reducer then the original state passed in should be returned
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

const sortColReducer = (sortColName = '', action) => {

  if (action.type === SORT_COL) {
    return action.payload.sortColName;
  }

  return sortColName;

};

export const carToolReducer = (state = {}, action) => {

  // always copy the original state in case there are extra
  // properties added by other reducers so those properties are not lost
  return {
    ...state, 
    // other reducer functions can be called by the top level reducer so
    // long as they are pure functions
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action),
    selectedCarIds: selectedCarIdsReducer(
      state.selectedCarIds,
      action,
      // if needed, extra data can be passed in
      state.cars ? state.cars.map(c => c.id) : [],
    ),
    sortColName: sortColReducer(state.sortColName, action),
  };
};
