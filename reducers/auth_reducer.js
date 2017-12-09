import {
  USER_INFO_AVAILABLE,
  USER_INFO_NOT_AVAILABLE,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FORGOT_PASSWORD
} from '../actions/types';

const INTIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  hasToken: null
};

export default (state = INTIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case USER_INFO_AVAILABLE:
      return { ...state, hasToken: true };
    case USER_INFO_NOT_AVAILABLE:
      return { ...state, hasToken: false };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
