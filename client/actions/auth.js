import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '../utils/setAuthToken';


// Load User
export const loadUser = () => async dispatch => {
  /*
  try {
    const value = await AsyncStorage.getItem('token');
  } catch (err) {
    console.error(err.msg);
  }
  */
  const value = await AsyncStorage.getItem('token');
  if (value) {
    setAuthToken(value);
  }

  //console.log("AsyncStorage.token :" + value);

  try {
    const res = await axios.get('http://localhost:5000/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log('this is the error you are looking for', err);
    dispatch({
      type: AUTH_ERROR
    });
  }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    //dispatch(NavigationActions.navigate({ routeName: 'CreateProfile' }));
  } catch (err) {
    console.log('this is the error you are looking for', err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
}


// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('http://localhost:5000/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    //dispatch(NavigationActions.navigate({ routeName: 'CreateProfile' }));
  } catch (err) {
    //console.log('this is the error you are looking for', err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
}
