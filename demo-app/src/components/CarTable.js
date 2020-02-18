import React from 'react';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({
  cars,
  editCarId,
  selectedCarIds,
  onEditCar: editCar,
  onSelectCar: selectCar,
  onToggleAllCars: toggleAllCars,
  onDeleteCar: deleteCar,
  onBulkDeleteCars: bulkDeleteCars,
  CarEditRowComponent
}) => {

  const TheCarEditRow = CarEditRowComponent || CarEditRow;

  return (
    <>
      <button type="button" onClick={bulkDeleteCars}>
        Bulk Delete</button>
      <button type="button" onClick={toggleAllCars}>
        Toggle All</button>
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
          {cars.map(car => car.id === editCarId
            ? <TheCarEditRow key={car.id} car={car} />
            : <CarViewRow key={car.id} car={car}
                selected={selectedCarIds.includes(car.id)}
                onSelectCar={selectCar} onDeleteCar={deleteCar}
                onEditCar={editCar} />)}
        </tbody>
      </table>
    </>
  );

};