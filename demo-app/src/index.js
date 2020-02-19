import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const ADD_ACTION = '[CalcTool] ADD';
const SUBTRACT_ACTION = '[CalcTool] SUBTRACT';
const CLEAR_ACTION = '[CalcTool] CLEAR';
const DELETE_ENTRY_ACTION = '[CalcTool] DELETE ENTRY';

const createAddAction = num => ({ type: ADD_ACTION, payload: { num }});
const createSubtractAction = num => ({ type: SUBTRACT_ACTION, payload: { num }});
const createClearAction = () => ({ type: CLEAR_ACTION });
const createDeleteEntryAction = entryId => ({ type: DELETE_ENTRY_ACTION, payload: { entryId }});

const calcToolReducer = (state = { history: [], }, action) => {
  switch(action.type) {
    case ADD_ACTION:
      return {
        ...state,
        history: state.history.concat({
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
          opName: action.type,
          opValue: action.payload.num
        }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: state.history.concat({
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
          opName: action.type,
          opValue: action.payload.num
        }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
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

// const createStore = (reducerFn) => {
//   let currentState = undefined;
//   const subscribers = [];

//   return {
//     getState: () => currentState,
//     subscribe: (callbackFn) => {
//       subscribers.push(callbackFn);
//     },
//     dispatch: (action) => {
//       currentState = reducerFn(currentState, action);
//       subscribers.forEach(cb => cb());
//     },
//   };
// };

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

// const bindActionCreators = (actionMap, dispatchFn) => {
//   return Object.keys(actionMap).reduce( (boundActionMap, actionKey) => {
//     boundActionMap[actionKey] = (...params) =>
//       dispatchFn(actionMap[actionKey](...params));
//     return boundActionMap;
//   }, {});
// }

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

const CalcToolContainer = () => {

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

ReactDOM.render(
  <Provider store={calcToolStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
)