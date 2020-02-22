import React, { useState, useEffect } from 'react';


export const CarsTable = () => {

  const [ cars, setCars ] = useState([]);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:3050/cars', { signal })
      .then(res => res.json())
      .then(cars => {
        console.log('calling set cars: ', cars.length);
        setCars(cars);
      })
      .catch(err => {
        console.log('called catch');
      });

    // run when the component is unmounted
    return () => {

      console.log('unmounting');
      controller.abort();

    };

  }, []);


  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
      </tr>)}
    </tbody>
  </table>

};