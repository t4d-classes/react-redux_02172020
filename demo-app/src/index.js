import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ADD_ACTION = '[CalcTool] ADD';
const SUBTRACT_ACTION = '[CalcTool] SUBTRACT';
const CLEAR_ACTION = '[CalcTool] CLEAR';
const DELETE_ENTRY_ACTION = '[CalcTool] DELETE ENTRY';

const createAddAction = num => ({ type: ADD_ACTION, payload: { num }});
const createSubtractAction = num => ({ type: SUBTRACT_ACTION, payload: { num }});
const createClearAction = () => ({ type: CLEAR_ACTION });
const createDeleteEntryAction = entryId => ({ type: DELETE_ENTRY_ACTION, payload: { entryId }});

const calcToolReducer = (state = { result: 0, history: [], }, action) => {
  console.log('state: ', state, 'action: ', action);
  switch(action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.num,
        history: state.history.concat({
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
          opName: action.type,
          opValue: action.payload.num
        }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.num,
        history: state.history.concat({
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
          opName: action.type,
          opValue: action.payload.num
        }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
        history: [],
      };
    case DELETE_ENTRY_ACTION:
      return {
        ...state,
        history: state.history.filter(e => e.id !== action.payload.entryId),  
      };
    default:
      return state;
  }
};

const createStore = (reducerFn) => {
  let currentState = undefined;
  const subscribers = [];

  return {
    getState: () => currentState,
    subscribe: (callbackFn) => {
      subscribers.push(callbackFn);
    },
    dispatch: (action) => {
      currentState = reducerFn(currentState, action);
      subscribers.forEach(cb => cb());
    },
  };
};

const calcToolStore = createStore(calcToolReducer);

const CalcTool = ({
  result,
  history,
  onAdd, onSubtract,
  onClear, onDeleteEntry }) => {

  const [ num, setNum ] = useState(0);

  return <form>

    <div>
      Result: {result}
    </div>

    <div>
      <label htmlFor="num-input">Num</label>
      <input type="number" id="num-input" value={num}
        onChange={e => setNum(Number(e.target.value))} />
    </div>

    <div>
      <button type="button" onClick={() => onAdd(num)}>+</button>
      <button type="button" onClick={() => onSubtract(num)}>-</button>
      <button type="button" onClick={() => onClear()}>Clear</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {history.map(entry => <tr key={entry.id}>
          <td>{entry.opName}</td>
          <td>{entry.opValue}</td>
          <td><button type="button" onClick={() => onDeleteEntry(entry.id)}>X</button></td>
        </tr>)}
      </tbody>
    </table>

  </form>

};

const add = num => calcToolStore.dispatch(createAddAction(num));
const subtract = num => calcToolStore.dispatch(createSubtractAction(num));
const clear = () => calcToolStore.dispatch(createClearAction());
const deleteEntry = (entryId) => calcToolStore.dispatch(createDeleteEntryAction(entryId));

calcToolStore.subscribe(() => {
  ReactDOM.render(
    <CalcTool result={calcToolStore.getState().result}
      history={calcToolStore.getState().history}
      onAdd={add} onSubtract={subtract} onClear={clear}
      onDeleteEntry={deleteEntry} />,
    document.querySelector('#root'),
  );
});

calcToolStore.dispatch(createAddAction(0));
