import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { CarForm } from './CarForm';

describe('<CarForm /> Enzyme Static HTML', () => {

  test('<CarForm /> renders', () => {
    
    const componentHtml = render(
      <div><CarForm onSubmitCar={() => null} buttonText="Add Car" /></div>
    ).html();
    
    expect(componentHtml).toMatchSnapshot();
  });

});

describe('<CarForm /> Enzyme Mock DOM', () => {

  let submitCarSpy;
  let component;

  beforeEach(() => {

    submitCarSpy = jest.fn();

    component = mount(
      <CarForm buttonText="Add Car"
        onSubmitCar={submitCarSpy} />
    );

  });

  test('<CarForm /> renders', () => {

    expect(component.find('button').text()).toBe('Add Car');

  });

  test('<CarForm /> form and submit car button', () => {

    const car = {
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };


    Object.keys(car).forEach(propName => {
      component.find(`#${propName}-input`).simulate('change',
        { target: { value: car[propName], name: propName } });
    });

    component.find('button').simulate('click');

    expect(submitCarSpy).toHaveBeenCalledWith(car);

  });

});

describe('<CarForm /> Shallow with Enzyme', () => {

  let submitCarSpy;
  let wrapper;

  beforeEach(() => {

    submitCarSpy = jest.fn();

    wrapper = shallow(<CarForm buttonText="Add Car"
      onSubmitCar={submitCarSpy} />);

  });

  test('<CarForm /> renders', () => {

    expect(wrapper.find('button').text()).toBe('Add Car');

  });

  test('<CarForm /> form and submit widget button', () => {

    const car = {
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    Object.keys(car).forEach(propName => {
      wrapper.find(`#${propName}-input`).simulate('change',
        { target: { value: car[propName], name: propName } });
    });

    wrapper.find('button').simulate('click');

    expect(submitCarSpy).toHaveBeenCalledWith(car);

  });


});