import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_SCHOOL_SUCCESS,
  PROFILE_ERROR,
  CREATE_PROFILE,
  ADD_IMAGES
} from './types';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import setAuthToken from '../utils/setAuthToken';



// Add School
export const addSchool = (school) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ school });

  try {
    const res = await axios.post('http://localhost:5000/api/users/school', body, config);

    dispatch({
      type: ADD_SCHOOL_SUCCESS,
      payload: res.data
    });

    //dispatch(loadUser());
    //dispatch(NavigationActions.navigate({ routeName: 'CreateProfile' }));
  } catch (err) {
    //console.log('this is the error you are looking for', err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: res.data
    });
  }
}

// Create Profile
export const createProfile = ({ bio, grade, gender }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ bio, grade, gender });

  try {
    const res = await axios.post('http://localhost:5000/api/users/bio', body, config);

    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });

    //dispatch(loadUser());
    //dispatch(NavigationActions.navigate({ routeName: 'CreateProfile' }));
  } catch (err) {
    //console.log('this is the error you are looking for', err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: res.data
    });
  }
}

// Add Images to profile
export const addImages = (userImages) => async dispatch => {
  let formData = new FormData();
  formData.append("userImages", userImages);
  //console.log(userImages);

  //const body = userImages;
  try {
    const res = await axios.post('http://localhost:5000/api/users/images', formData);


    dispatch({
      type: ADD_IMAGES,
      payload: res.data
    });

    //dispatch(loadUser());
    //dispatch(NavigationActions.navigate({ routeName: 'CreateProfile' }));
  } catch (err) {
    //console.log('this is the error you are looking for', err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: res.data
    });
  }
}