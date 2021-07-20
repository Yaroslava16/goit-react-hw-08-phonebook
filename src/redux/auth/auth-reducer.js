import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerSuccess } from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, payload) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, payload) => payload.token,
});

const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
});
