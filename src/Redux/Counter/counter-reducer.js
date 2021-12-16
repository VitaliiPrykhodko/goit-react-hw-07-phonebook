import { createReducer } from '@reduxjs/toolkit';
import actions from './counter-action';

export const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ key }) => key !== payload),
});

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

