import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  refreshCars, appendCar, replaceCar, deleteCar, bulkDeleteCars,
  createEditCarAction, createCancelCarAction, createSortColAction,
  createToggleCarAction, createToggleAllCarsAction,
} from '../actions/car-tool-actions';
import { CarTool } from '../components/CarTool';

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

  const boundActionsProps = useCallback(
    mapDispatchToProps(dispatch), [ dispatch ],
  );

  const dataProps = useSelector(state => ({
    cars: state.cars,
    editCarId: state.editCarId,
    selectedCarIds: state.selectedCarIds,
    sortColName: state.sortColName,
  }));

  return <CarTool {...boundActionsProps} {...dataProps} />;
};