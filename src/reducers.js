import { combineReducers } from 'redux';  

const initialState = {
  activeSheetID: { current: 'home', previous: [] }
};

const activeSheetID = (state = initialState.activeSheetID, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_SHEET_ID': {
      return Object.assign({}, state, { current: action.sheetID });
    }
    case 'ADD_PREVIOUS_SHEET_ID': {
      const previousArray = state.previous;
      previousArray.push(action.sheetID);
      return Object.assign({}, state, { previous: previousArray });
    }
    case 'REVERT_TO_PREVIOUS_SHEET_ID': {
      const previousArray = state.previous;
      return Object.assign({}, state, { current: previousArray.pop(), previous: previousArray })
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  activeSheetID
});

export default reducers;
