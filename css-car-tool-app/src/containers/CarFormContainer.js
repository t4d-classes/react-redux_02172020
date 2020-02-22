import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { appendCar as onSubmit } from '../actions/appendCar';

import { CarForm } from '../components/CarForm';

export const CarFormContainer = connect(
  null,
  dispatch => bindActionCreators({
    onSubmit
  }, dispatch),
)(CarForm);