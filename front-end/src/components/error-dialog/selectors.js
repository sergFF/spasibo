import { createSelector } from 'reselect';

const errorsList = state => state.errorsReducer;
export const errorSelector = createSelector(
  errorsList,
  errorsList => {
    if (errorsList.length !== 0) {
      return errorsList[0];
    }
    return null;
  }
);
