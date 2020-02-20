import { combineReducers } from 'redux';
import {
  APPEND_CAR, REPLACE_CAR, DELETE_CAR,
  EDIT_CAR, CANCEL_CAR, TOGGLE_CAR,
  TOGGLE_ALL_CARS, SORT_COL, BULK_DELETE_CARS,
  REFRESH_CARS_DONE,
}
from '../actions/car-tool-actions';

const carsReducer = (cars = [], action, selectedCarIds) => {

  switch (action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    case APPEND_CAR:
      return cars.concat({
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      });
    case REPLACE_CAR:
      const newCars = cars.concat();
      const carIndex = cars.findIndex(c => c.id === action.payload.car.id);
      newCars[carIndex] = action.payload.car;
      return newCars;
    case DELETE_CAR:
      return cars.filter(c => c.id !== action.payload.carId);
    case BULK_DELETE_CARS:
      return cars.filter(c => !selectedCarIds.includes(c.id));
    default:
      return cars;
  }

};

const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR) {
    return action.payload.carId;
  }

  if ([
    APPEND_CAR, REPLACE_CAR, DELETE_CAR,
    CANCEL_CAR, BULK_DELETE_CARS,
  ].includes(action.type)) {
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

  return selectedCarIds;  

};

const sortColReducer = (colName = '', action) => {

  if (action.type === SORT_COL) {
    return action.payload.colName;
  }

  return colName;

};

const someReducers = combineReducers({
  editCarId: editCarIdReducer,
  sortCol: sortColReducer
});

export const carToolReducer = (state = {}, action) => {

  const newState = someReducers({
    editCarId: state.editCarId,
    sortCol: state.sortCol,
  }, action);

  return {
    ...newState,
    cars: carsReducer(state.cars, action, state.selectedCarIds ? state.selectedCarIds : []),
    selectedCarIds: selectedCarIdsReducer(state.selectedCarIds, action, state.cars ? state.cars.map(c => c.id) : []),
  };

  // return {
  //   cars: carsReducer(state.cars, action, state.selectedCarIds ? state.selectedCarIds : []),
  //   editCarId: editCarIdReducer(state.editCarId, action),
  //   selectedCarIds: selectedCarIdsReducer(state.selectedCarIds, action, state.cars ? state.cars.map(c => c.id) : []),
  //   sortCol: sortColReducer(state.sortCol, action),
  // };
}

// export const deltaReducer = (state = {}, action) => {

//   // return {
//   //   buyATicket: buyATicketFeatureReducer(state.buyATicket, action),
//   //   checkIn: checkInFeatureReducer(state.checkIn, action),
//   //   skyMiles: skyMilesFeatureReducer(state.skyMiles, action),
//   // };

//   return combineReducers({
//     buyATicket: buyATicketFeatureReducer,
//     checkIn: checkInFeatureReducer,
//     skyMiles: skyMilesFeatureReducer,
//   })

// };