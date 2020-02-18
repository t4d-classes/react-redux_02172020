import React from 'react';

export const CarViewRow = ({
  car,
  selected,
  onSelectCar: selectCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <tr>
      <td><input type="checkbox"
        checked={selected}
        onChange={() => selectCar(car.id)} /></td>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td><button type="button"
        onClick={() => deleteCar(car.id)}>
          Delete</button></td>
    </tr>
  );

};