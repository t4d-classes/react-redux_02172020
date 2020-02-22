import React from 'react';

import './CarForm.css';

import { Button } from './Button';

export class CarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
      transmission: 'Automatic',
      cruiseControl: 'Yes',
      heatedSeats: 'Yes',
    };
  }

  change = e => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  submitCar = () => {
    this.props.onSubmit({ ...this.state });
  };

  render() {
    return <form className="CarForm">
      <h2>Add New Car</h2>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={this.state.make} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="transmission-input">Transmission:</label>
        <input type="text" id="transmission-input" name="transmission"
          value={this.state.transmission} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="cruise-control-input">Cruise Control:</label>
        <input type="text" id="cruise-control-input" name="cruiseControl"
          value={this.state.cruiseControl} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="heated-seats-input">Heated Seats:</label>
        <input type="text" id="heated-seats-input" name="heatedSeats"
          value={this.state.heatedSeats} onChange={this.change} />
      </div>
      <Button onClick={this.submitCar}>Add Car</Button>
    </form>;
  }
}