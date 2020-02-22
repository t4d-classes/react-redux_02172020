export const isLoading = (state = false, action) => {

  if (action.type.endsWith('_REQUEST')) {
    return true;
  } else if (action.type.endsWith('_DONE')) {
    return false;
  } else {
    return state;
  }

};