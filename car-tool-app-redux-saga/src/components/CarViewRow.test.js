import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { CarViewRow } from './CarViewRow';

describe('<CarViewRow /> Enzyme Static HTML', () => {

  let car;

  beforeEach(() => {

   car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

  });

  test('<CarViewRow /> renders', () => {

    const componentHtml = render(
      <div>
        <table>
          <tbody>
            <CarViewRow car={car} onDeleteCar={() => null} onEditCar={() => null} />
          </tbody>
        </table>
      </div>
    ).html();
    
    expect(componentHtml).toMatchSnapshot();
  });

});

describe('<CarViewRow /> Enzyme Mock DOM', () => {

  let car;
  let deleteCarSpy;
  let editCarSpy;
  let component;

  beforeEach(() => {

    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.fn();
    editCarSpy = jest.fn();

    component = mount(<table><tbody>
      <CarViewRow car={car}
        onDeleteCar={deleteCarSpy}
        onEditCar={editCarSpy} />
    </tbody></table>).find(CarViewRow);

  });

   
  test('<CarViewRow /> renders', () => {

    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    component.find('td').slice(0,6).forEach( (node, index) => {
      const carField = String(car[columns[index]]);
      expect(node.text()).toBe(carField);
    } );

  });

  test('<CarViewRow /> edit car button', () => {

    component.find('button').first().simulate('click');

    expect(editCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledTimes(1);
    expect(deleteCarSpy).toHaveBeenCalledTimes(0);

  });

  test('<CarViewRow /> delete car button', () => {

    component.find('button').last().simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);

  });


});

describe('<CarViewRow /> Shallow with Enzyme', () => {

  let car;
  let deleteCarSpy;
  let editCarSpy;
  let wrapper;

  beforeEach(() => {

    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.fn();
    editCarSpy = jest.fn();

    wrapper = shallow(<CarViewRow car={car}
      onDeleteCar={deleteCarSpy}
      onEditCar={editCarSpy} />);

  });

  test('<CarViewRow /> renders', () => {

    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    wrapper.find('td').slice(0,6).forEach( (node, index) => {
      const carField = String(car[columns[index]]);
      expect(node.text()).toBe(carField);
    } );

  });

  test('<CarViewRow /> buttons', () => {

    wrapper.find('button').first().simulate('click');
    wrapper.find('button').last().simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledWith(car.id);

  });

});
