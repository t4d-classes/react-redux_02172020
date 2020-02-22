import React from 'react';

import { useForm } from '../hooks/useForm';

const getInitCarForm = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export class CarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = getInitCarForm();

    // this.change = this.change.bind(this);
    // this.submitCar = this.submitCar.bind(this);
  }

  change = (e) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  }

  submitCar = () => {
    this.props.onSubmitCar({ ...this.state });
  }

  render() {

    return (
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input type="text" id="make-input" name="make"
            value={this.state.make} onChange={this.change} />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input type="text" id="model-input" name="model"
            value={this.state.model} onChange={this.change} />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input type="number" id="year-input" name="year"
            value={this.state.year} onChange={this.change} />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input type="text" id="color-input" name="color"
            value={this.state.color} onChange={this.change} />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input type="number" id="price-input" name="price"
            value={this.state.price} onChange={this.change} />
        </div>
        <button type="button" onClick={this.submitCar}>
          {this.props.buttonText}
        </button>
        {this.props.cancelCar && <button type="button" onClick={this.props.cancelCar}>
          Cancel
        </button>}
      </form>
    );
  }
}

// default props specify default values for props which
// are not passed to the component
CarForm.defaultProps = {
  buttonText: 'Submit Car',
};
