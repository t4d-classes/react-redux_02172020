import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAppendCarAction, createReplaceCarAction, createDeleteCarAction,
  createEditCarAction, createCancelCarAction, createSortColAction,
  createToggleCarAction, createToggleAllCarsAction, createBulkDeleteCarsAction,
  refreshCars,
} from '../actions/car-tool-actions';
import { CarTool } from '../components/CarTool';

export const CarToolContainer = () => {

  const dispatchProps = bindActionCreators({
    onAppendCar: createAppendCarAction,
    onReplaceCar: createReplaceCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
    onSortCol: createSortColAction,
    onToggleCar: createToggleCarAction,
    onToggleAllCars: createToggleAllCarsAction,
    onBulkDeleteCars: createBulkDeleteCarsAction,
    onRefreshCars: refreshCars,
  }, useDispatch());

  const stateProps = useSelector(state => state);

  return <CarTool {...dispatchProps} {...stateProps} />;
};