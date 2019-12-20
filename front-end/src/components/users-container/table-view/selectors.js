import { createSelector } from 'reselect';
import sortBy from 'lodash.sortby';
const usersList = state => state.usersList;
export const usersListSelector = createSelector(
  usersList,
  usersList => ({list: sortBy(usersList.list, user => user.fullName), status: usersList.status})
);
