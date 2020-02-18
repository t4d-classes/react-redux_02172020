import React from 'react';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';
import { SortColHeader } from './SortColHeader';

export const CarTable = ({
  config,
  cars,
  editCarId,
  selectedCarIds,
  onEditCar: editCar,
  onSelectCar: selectCar,
  onToggleAllCars: toggleAllCars,
  onDeleteCar: deleteCar, 
  onBulkDeleteCars: bulkDeleteCars,
  CarEditRowComponent,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onSort: sort,
  sortCol,
}) => {

  const TheCarEditRow = CarEditRowComponent || CarEditRow;

  const sortedCars = cars.concat().sort((a,b) => {

    return a[sortCol] > b[sortCol] ? 1 : a[sortCol] < b[sortCol] ? -1 : 0;

  });

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
            {config.cols.map(col =>
              <SortColHeader colName={col.name} onSort={sort}
                sortCol={sortCol} headerText={col.header} />)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedCars.map(car => car.id === editCarId
            ? <TheCarEditRow key={car.id} car={car}
                onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <CarViewRow key={car.id} car={car}
                selected={selectedCarIds.includes(car.id)}
                onSelectCar={selectCar} onDeleteCar={deleteCar}
                onEditCar={editCar} />)}
        </tbody>
      </table>
    </>
  );

};