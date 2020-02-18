import React, { useState } from 'react';

export const CarEditRow = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [ carForm, setCarForm ] = useState({ ...car });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  const saveCar = () => {

    onSaveCar({
      ...carForm,
      id: car.id
    });

  };

  return (
    <tr>
      <td></td>
      <td>{car.id}</td>
      <td> <input type="text" id="make-input" name="make"
          value={carForm.make} onChange={change} /></td>
      <td><input type="text" id="model-input" name="model"
          value={carForm.model} onChange={change} /></td>
      <td><input type="number" id="year-input" name="year"
          value={carForm.year} onChange={change} /></td>
      <td><input type="text" id="color-input" name="color"
          value={carForm.color} onChange={change} /></td>
      <td><input type="number" id="price-input" name="price"
          value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveCar}>
            Save</button>
        <button type="button"
          onClick={cancelCar}>
            Cancel</button>
      </td>
    </tr>
  );

};