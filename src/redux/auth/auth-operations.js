import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {};

export const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const logIn = credentials => dispatch => {};

export const logOut = () => dispatch => {};

export const getCurrentUser = () => (dispatch, getState) => {};
