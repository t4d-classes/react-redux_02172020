import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());

  const [ selectedCarIds, setSelectedCarIds ] =
    useState([]);

  const selectCar = (carId) => {

    if (selectedCarIds.includes(carId)) {
      setSelectedCarIds(
        selectedCarIds.filter(id => id !== carId));
    } else {
      setSelectedCarIds(selectedCarIds.concat(carId));
    }

  };

  const deleteCar = (carId) => {

    setCars(cars.filter(c => c.id !== carId));
    setSelectedCarIds(
      selectedCarIds.filter(id => id !== carId));

  };

  const bulkDeleteCars = () => {

    setCars(cars.filter(
      c => !selectedCarIds.includes(c.id)));
    setSelectedCarIds([]);

  }


  const addCar = (car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} selectedCarIds={selectedCarIds}
        onSelectCar={selectCar} onDeleteCar={deleteCar}
        onBulkDeleteCars={bulkDeleteCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};