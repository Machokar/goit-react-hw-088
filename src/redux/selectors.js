import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.name;

export const selectItems = state => state.contact.items;

export const selectIsLoading = state => state.contact.loading;

export const selectIsError = state => state.contact.error;
export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (users, inputFilter) => {
    return users.filter(user => user.name.toLowerCase().includes(inputFilter.toLowerCase()));
  }
);
