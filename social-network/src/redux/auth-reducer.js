export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
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

export default authReducer;
