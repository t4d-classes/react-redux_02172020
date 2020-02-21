import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import {
  ADD_ACTION, SUBTRACT_ACTION, createAddAction,
  createClearAction, createDeleteEntryAction,
  createSubtractAction,
} from '../actions/calc-tool-actions';
import { CalcTool } from '../components/CalcTool';

const calcResult = history => {

  console.log('calling calc result');

  return history.reduce( (acc, entry) => { 
    switch (entry.opName) {
      case ADD_ACTION:
        return acc + entry.opValue;
      case SUBTRACT_ACTION:
        return acc - entry.opValue;
        default:
        return acc;
    }
  }, 0);
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onClear: createClearAction,
  onDleteEntry: createDeleteEntryAction,
  noop: () => ({ type: 'NOOP' }),
}, dispatch);

const historySelector = createSelector(
  state => state.history,
  (history) => ({
    result: calcResult(history),
    history: history,
  }),
);

export const CalcToolContainer = () => {

  const dispatch = useDispatch();

  const boundActionsProps = useCallback(
    mapDispatchToProps(dispatch),
    [dispatch],
  );

  const dataProps = useSelector(historySelector);

  return <CalcTool {...boundActionsProps} {...dataProps} />;
};