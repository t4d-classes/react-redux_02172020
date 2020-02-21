import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  refreshCars, appendCar, replaceCar, deleteCar, bulkDeleteCars,
  createEditCarAction, createCancelCarAction, createSortColAction,
  createToggleCarAction, createToggleAllCarsAction,
} from '../actions/car-tool-actions';
import { CarTool } from '../components/CarTool';

// produces an object of dispatch-bound actions
const mapDispatchToProps = dispatch => bindActionCreators({
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
}, dispatch)

export const CarToolContainer = () => {

  const dispatch = useDispatch();

  // only produce a new object of bound actions if the dispatch
  // function reference changes (which it should never do)
  const boundActionsProps = useCallback(
    mapDispatchToProps(dispatch), [ dispatch ],
  );

  // select the data props from the state which will be passed into
  // component
  const dataProps = useSelector(state => ({
    cars: state.cars,
    editCarId: state.editCarId,
    selectedCarIds: state.selectedCarIds,
    sortColName: state.sortColName,
  }));

  // using a JSX spread, pass the bound actions and data
  return <CarTool {...boundActionsProps} {...dataProps} />;
};