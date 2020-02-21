import React from 'react';
import PropTypes from 'prop-types';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';
import { SortColHeader } from './SortColHeader';
import { carsPropType } from '../propTypes/cars';

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
  sortColName,
  onRefreshCars: refreshCars,
}) => {

  const TheCarEditRow = CarEditRowComponent || CarEditRow;

  const sortedCars = cars.concat().sort((a,b) => {

    return a[sortColName] > b[sortColName]
      ? 1 : a[sortColName] < b[sortColName] ? -1 : 0;

  });

  return (
    <>
      <button type="button" onClick={() => bulkDeleteCars(selectedCarIds)}>
        Bulk Delete</button>
      <button type="button" onClick={toggleAllCars}>
        Toggle All</button>
      <button type="button" onClick={refreshCars}>
        Refresh Cars</button>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            {config.cols.map(col =>
              <SortColHeader key={col.id} colName={col.name} onSort={sort}
                sortColName={sortColName} headerText={col.header} />)}
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

CarTable.defaultProps = {
  editCarId: -1,
};

CarTable.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number.isRequired,
};
