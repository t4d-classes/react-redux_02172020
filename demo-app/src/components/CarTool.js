import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());


  const addCar = (car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};