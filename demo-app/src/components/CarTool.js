import React, { useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { EditCarFormRow } from './EditCarFormRow';

export const CarTool = ({
  cars, selectedCarIds,
  editCarId, sortColName,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
  onSortCol: sortCol,
  onToggleCar: toggleCar,
  onToggleAllCars: toggleAllCars,
  onBulkDeleteCars: bulkDeleteCars,
  onRefreshCars: refreshCars,
}) => {

  useEffect(() => {

    refreshCars();

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
        editCarId={editCarId} sortColName={sortColName}
        onEditCar={editCar} onSelectCar={toggleCar}
        onDeleteCar={deleteCar} onToggleAllCars={toggleAllCars}
        onBulkDeleteCars={bulkDeleteCars} onSaveCar={replaceCar}
        onCancelCar={cancelCar} 
        CarEditRowComponent={EditCarFormRow}
        onSort={sortCol} onRefreshCars={refreshCars} />
      <CarForm onSubmitCar={appendCar} />
    </>
  );

};