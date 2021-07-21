import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerError, registerSuccess, loginSuccess, loginError } from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({ user, token, error });

export default authReducer;
