export const REQUEST_DELETE_CAR = 'REQUEST_DELETE_CAR';

export const requestCarDelete = carId => ({ type: REQUEST_DELETE_CAR, payload: { carId } });