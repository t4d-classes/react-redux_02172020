import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = ['blue','red','black','green','orange','white'];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 30000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
];


ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + this.lastName;
  }

}

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person2.prototype.getFullName = function() {
  return this.firstName + this.lastName;
}


console.dir(Person);
console.dir(Person2);
