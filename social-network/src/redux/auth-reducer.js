export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_AUTH_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

// ACTION CREATOR
export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login },
  };
};

export const setAuthUserProfile = (profile) => {
  return {
    type: SET_AUTH_USER_PROFILE,
    profile: profile,
  };
};

export default authReducer;
