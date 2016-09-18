export const setActiveSheetID = (sheetID) => ({
  type: 'SET_ACTIVE_SHEET_ID', sheetID
});

export const addPreviousSheetID = (sheetID) => ({
  type: 'ADD_PREVIOUS_SHEET_ID', sheetID
});

export const revertToPreviousSheetID = () => ({
  type: 'REVERT_TO_PREVIOUS_SHEET_ID'
});
