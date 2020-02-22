export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';

export const refreshCarsRequest = () => ({ type: REFRESH_CARS_REQUEST });
export const refreshCarsDone = cars => ({ type: REFRESH_CARS_DONE, payload: { cars } });

export const refreshCars = () => {

  return dispatch => {

    dispatch(refreshCarsRequest());
    return fetch('http://localhost:3050/cars')
      .then(res => res.json())
      .then(cars => setTimeout(() => dispatch(refreshCarsDone(cars)), 4000));
  };

};