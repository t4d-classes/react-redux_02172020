const ADD_ACTION = '[CalcTool] ADD';
const SUBTRACT_ACTION = '[CalcTool] SUBTRACT';

const createAddAction = num => ({ type: ADD_ACTION, payload: { num }});
const createSubtractAction = num => ({ type: SUBTRACT_ACTION, payload: { num }});

const calcToolReducer = (state = { result: 0 }, action) => {
  console.log('state: ', state, 'action: ', action);
  switch(action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.num,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.num,
      };
    default:
      return state;
  }
};

const createStore = (reducerFn) => {

  return {
    getState: () => {},
    subscribe: () => {},
    dispatch: () => {},
  };

};

// const actions = [
//   createAddAction(1),
//   createSubtractAction(2),
//   { type: ADD_ACTION, payload: { num: 3 } },
//   { type: SUBTRACT_ACTION, payload: { num: 4 } },
//   { type: ADD_ACTION, payload: { num: 5 } },
// ];

// const finalState = actions.reduce( , { result: 0 } );

// console.log(finalState);
