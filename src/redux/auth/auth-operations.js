import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {};

const register = credentials => dispatch => {};

const logIn = credentials => dispatch => {};

const logOut = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
