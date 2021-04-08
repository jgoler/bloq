import {
  ADD_SCHOOL_SUCCESS,
  PROFILE_ERROR,
  CREATE_PROFILE,
  ADD_IMAGES
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_SCHOOL_SUCCESS:
    case CREATE_PROFILE:
    case ADD_IMAGES:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      }
    default:
      return state;
  }
}