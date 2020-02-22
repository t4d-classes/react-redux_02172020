import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CarDetails } from '../components/CarDetails';

export const CarDetailsContainer = withRouter(connect(
  ({ cars }, { match: { params }}) => ({ car: cars.find(c => c.id === Number(params.carId)) || {} }),
)(CarDetails));

