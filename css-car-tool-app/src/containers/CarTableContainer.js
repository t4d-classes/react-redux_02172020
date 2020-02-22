import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { refreshCars as onRefresh } from '../actions/refreshCars';
import { viewCar as onView } from '../actions/viewCar';
import { editCar as onEdit } from '../actions/editCar';
import { deleteCar as onDelete } from '../actions/deleteCar';
import { replaceCar as onReplace } from '../actions/replaceCar';
import { requestCarDelete as onRequestDelete } from '../actions/requestDeleteCar';

import { CarTable } from '../components/CarTable';

export const CarTableContainer = connect(
  ({ cars, editCarId, requestDeleteCarId, isLoading }, { match: { params }}) =>
    ({ cars, viewCarId: Number(params.carId), editCarId, requestDeleteCarId, isLoading }),
  dispatch => bindActionCreators({
    onRefresh, onView, onEdit, onDelete, onRequestDelete, onReplace,
  }, dispatch),
)(CarTable);