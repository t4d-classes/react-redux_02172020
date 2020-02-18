import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

const EditCarFormRow = (props) => {

  return <tr>
    <td colSpan="8">
      <CarForm buttonText="Save" {...props} />
    </td>
  </tr>;

}

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

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
      <CarTable cars={cars} selectedCarIds={selectedCarIds} editCarId={editCarId}
        onEditCar={setEditCarId} onSelectCar={selectCar} onDeleteCar={deleteCar}
        onBulkDeleteCars={bulkDeleteCars} onToggleAllCars={toggleAllCars}
        onCancelCar={() => setEditCarId(-1)}
        CarEditRowComponent={EditCarFormRow} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};