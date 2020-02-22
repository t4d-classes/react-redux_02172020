export const EDIT_CAR = 'EDIT_CAR';

export const editCar = carId =>
  ({ type: EDIT_CAR, payload: { carId }});