import React from 'react';

import './CarTable.css';

import spinner from './spinner.png';

import { Modal } from './Modal';
import { Confirm } from './Confirm';
import { Button } from './Button';
import { DeleteButton } from './DeleteButton';
import { EditCarForm } from './EditCarForm';

export class CarTable extends React.Component {

  componentDidMount() {
    this.props.onRefresh();
  }

  confirmResponseDeleteCar = (deleteCarResponse) => {
    if (deleteCarResponse) {
      this.props.onDelete(this.props.requestDeleteCarId);
    }
    this.props.onRequestDelete(-1);
  }

  render() {

    const { cars, onView, onEdit, viewCarId, editCarId } = this.props;

    return <div className="CarTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <>
            <tr key={'view-' + car.id} className={(viewCarId === car.id || '') && 'selected'}>
              <td className="num">{car.id}</td>
              <td className="text">{car.make}</td>
              <td className="text">{car.model}</td>
              <td className="option">{car.year}</td>
              <td className="option">{car.color}</td>
              <td className="currency">{car.price}</td>
              <td className="buttons">
                <Button onClick={() => onView(car.id)}>View</Button>
                <Button onClick={() => onEdit(car.id)}>Edit</Button>
                <DeleteButton onClick={() => this.props.onRequestDelete(car.id)}>Delete</DeleteButton>
              </td>
            </tr>
            {editCarId === car.id && <tr key={'edit-' + car.id} className="editRow">
              <td colSpan="7">
                <EditCarForm car={car} onSave={this.props.onReplace} onCancel={() => onEdit(-1)} />
              </td>
            </tr>}
          </>)}
        </tbody>
      </table>
      <Modal show={this.props.requestDeleteCarId > 0}>
        <Confirm
          onConfirm={this.confirmResponseDeleteCar}
          prompt={`Are you sure you want to delete car ${this.props.requestDeleteCarId}?`} />
      </Modal>
      <Modal show={this.props.isLoading}>
        <div className="Loading">
           <img src={spinner} alt="Loading Indicator" />
           <span>Loading...</span>
        </div>
      </Modal>
    </div>;
  }
}