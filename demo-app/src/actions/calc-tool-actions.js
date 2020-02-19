export const ADD_ACTION = '[CalcTool] ADD';
export const SUBTRACT_ACTION = '[CalcTool] SUBTRACT';
export const CLEAR_ACTION = '[CalcTool] CLEAR';
export const DELETE_ENTRY_ACTION = '[CalcTool] DELETE ENTRY';

export const createAddAction = num => ({ type: ADD_ACTION, payload: { num }});
export const createSubtractAction = num => ({ type: SUBTRACT_ACTION, payload: { num }});
export const createClearAction = () => ({ type: CLEAR_ACTION });
export const createDeleteEntryAction = entryId => ({ type: DELETE_ENTRY_ACTION, payload: { entryId }});
