import React, { useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { EditCarFormRow } from './EditCarFormRow';

export const CarTool = ({
  cars, selectedCarIds, editCarId, sortCol,
  onAppendCar, onReplaceCar, onDeleteCar,
  onEditCar, onCancelCar, onSortCol,
  onToggleCar, onToggleAllCars, onBulkDeleteCars,
  onRefreshCars,
}) => {

  useEffect(() => {

    onRefreshCars();

  }, []);

  const tableConfig = {
    cols: [
      { id: 1, name: 'id', header: 'Id' },
      { id: 2, name: 'make', header: 'Make' },
      { id: 3, name: 'model', header: 'Model' },
      { id: 4, name: 'year', header: 'Year' },
      { id: 5, name: 'color', header: 'Body Color' },
      { id: 6, name: 'price', header: 'Price' },
    ]
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable config={tableConfig}
        cars={cars} selectedCarIds={selectedCarIds}
        editCarId={editCarId} sortCol={sortCol}
        onEditCar={onEditCar} onSelectCar={onToggleCar}
        onDeleteCar={onDeleteCar} onToggleAllCars={onToggleAllCars}
        onBulkDeleteCars={onBulkDeleteCars} onSaveCar={onReplaceCar}
        onCancelCar={onCancelCar} 
        CarEditRowComponent={EditCarFormRow}
        onSort={onSortCol} />
      <CarForm onSubmitCar={onAppendCar} />
    </>
  );

};