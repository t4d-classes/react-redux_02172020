import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { EditCarFormRow } from './EditCarFormRow';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);
  const [ selectedCarIds, setSelectedCarIds ] =
    useState([]);
  const [ sortCol, setSortCol ] =
    useState(null);

  const selectCar = (carId) => {
    if (selectedCarIds.includes(carId)) {
      setSelectedCarIds(
        selectedCarIds.filter(id => id !== carId));
    } else {
      setSelectedCarIds(selectedCarIds.concat(carId));
    }
  };

  const toggleAllCars = () => {
    if (cars.length === selectedCarIds.length) {
      setSelectedCarIds([]);
    } else {
      setSelectedCarIds(cars.map(c => c.id));
    }
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
    setSelectedCarIds(
      selectedCarIds.filter(id => id !== carId));
    setEditCarId(-1);
    };

  const bulkDeleteCars = () => {
    setCars(cars.filter(
      c => !selectedCarIds.includes(c.id)));
    setSelectedCarIds([]);
    setEditCarId(-1);
  }

  const addCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  }

  const replaceCar = (car) => {
    const newCars = cars.concat();
    const carIndex = cars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

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
      <CarTable config={tableConfig} cars={cars} selectedCarIds={selectedCarIds} editCarId={editCarId}
        onEditCar={setEditCarId} onSelectCar={selectCar} onDeleteCar={deleteCar}
        onBulkDeleteCars={bulkDeleteCars} onToggleAllCars={toggleAllCars}
        onCancelCar={() => setEditCarId(-1)} onSaveCar={replaceCar}
        CarEditRowComponent={EditCarFormRow}
        onSort={setSortCol} sortCol={sortCol} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

};