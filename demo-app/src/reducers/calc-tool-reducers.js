import { ADD_ACTION, SUBTRACT_ACTION, CLEAR_ACTION, DELETE_ENTRY_ACTION }
  from '../actions/calc-tool-actions';

export const calcToolReducer = (state = { history: [], }, action) => {
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
