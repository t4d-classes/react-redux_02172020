import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  refreshCars, appendCar, replaceCar, deleteCar, bulkDeleteCars,
  createEditCarAction, createCancelCarAction, createSortColAction,
  createToggleCarAction, createToggleAllCarsAction,
} from '../actions/car-tool-actions';
import { CarTool } from '../components/CarTool';

export const CarToolContainer = () => {

  const dispatchProps = bindActionCreators({
    onAppendCar: appendCar,
    onReplaceCar: replaceCar,
    onDeleteCar: deleteCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
    onSortCol: createSortColAction,
    onToggleCar: createToggleCarAction,
    onToggleAllCars: createToggleAllCarsAction,
    onBulkDeleteCars: bulkDeleteCars,
    onRefreshCars: refreshCars,
  }, useDispatch());

  const stateProps = useSelector(state => state);

  return <CarTool {...dispatchProps} {...stateProps} />;
};