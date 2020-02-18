import React from 'react';

import { CarForm } from './CarForm';

export const EditCarFormRow = (props) => {

  let otherProps = {};

  if (props.onSaveCar) {
    otherProps.onSubmitCar = props.onSaveCar;
  }

  return <tr>
    <td colSpan="8">
      <CarForm buttonText="Save" {...props} {...otherProps} />
    </td>
  </tr>;

};
