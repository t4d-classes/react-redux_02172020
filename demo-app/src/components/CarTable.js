import React from 'react';

import { CarViewRow } from './CarViewRow';

export const CarTable = ({
  cars,
  selectedCarIds,
  onSelectCar: selectCar,
  onDeleteCar: deleteCar,
  onBulkDeleteCars: bulkDeleteCars
}) => {

  return (
    <>
      <button type="button" onClick={bulkDeleteCars}>
        Bulk Delete</button>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <CarViewRow key={car.id} car={car}
            selected={selectedCarIds.includes(car.id)}
            onSelectCar={selectCar} onDeleteCar={deleteCar} />)}
        </tbody>
      </table>
    </>
  );

};