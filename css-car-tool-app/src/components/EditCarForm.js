import React from 'react';
import { omit } from 'lodash';

import './EditCarForm.css';

import { Button } from './Button';

export class EditCarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...omit(props.car, 'id'),
    };
  }

  change = e => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  save = () => {
    this.props.onSave({ ...this.state, id: this.props.car.id });
  };

  render() {
    return <form className="EditCarForm">
      <h3>Edit Car</h3>
      <div className="container">
        <div>
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
        </div>
        <div>
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
        </div>
      </div>

      <Button onClick={this.save}>Save</Button>
      <Button onClick={this.props.onCancel}>Cancel</Button>
    </form>;
  }

}