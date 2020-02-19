import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  ADD_ACTION, SUBTRACT_ACTION, createAddAction,
  createClearAction, createDeleteEntryAction,
  createSubtractAction,
} from '../actions/calc-tool-actions';
import { CalcTool } from '../components/CalcTool';

const calcResult = history => {
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

export const CalcToolContainer = () => {

  const { add, subtract, clear, deleteEntry } = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    clear: createClearAction,
    deleteEntry: createDeleteEntryAction,
  }, useDispatch());

  const stateProps = useSelector(state => ({
    result: calcResult(state.history),
    history: state.history,
  }));

  return <CalcTool {...stateProps}
    onAdd={add} onSubtract={subtract}
    onClear={clear} onDeleteEntry={deleteEntry}/>;
};