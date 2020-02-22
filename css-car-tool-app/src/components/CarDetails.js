import React from 'react';

import './CarDetails.css';

export const CarDetails = ({ car }) => {

  return <section className="CarDetails">
    <header>
      <h2>Car Details</h2>
    </header>
    <ul>
      <li>Make: {car.make}</li>
      <li>Model: {car.model}</li>
      <li>Year: {car.year}</li>
      <li>Color: {car.color}</li>
      <li>Price: {car.price}</li>
      <li>Transmission: {car.transmission}</li>
      <li>Cruise Control: {car.cruiseControl}</li>
      <li>Heated Seats: {car.heatedSeats}</li>
    </ul>
  </section>;

};