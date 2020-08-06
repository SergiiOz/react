import { authAPI } from './../api/api';
import { stopSubmit } from 'redux-form';
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
        ...action.payload,
        //if we get data then change isAuth to true
        // isAuth: true,
      };
    // case SET_AUTH_USER_PROFILE:
    //   return { ...state, profile: action.profile };

    default:
      return state;
  }
};

// ACTION CREATOR
export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

// export const setAuthUserProfile = (profile) => {
//   return {
//     type: SET_AUTH_USER_PROFILE,
//     profile: profile,
//   };
// };

//THUNK CREATOR
export const setAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    //we get profile info
    authAPI.me().then((response) => {
      // console.log(response.data);
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        // this.props.setAuthUserData(
        //   response.data.data.id,
        //   response.data.data.email,
        //   response.data.data.login
        // );
      }
    });
  };
};

//for Login
export const setLoginUserThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    //we get profile info
    authAPI.login(email, password, rememberMe).then((response) => {
      console.log(response.data);
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataThunkCreator());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Something wrong';
        dispatch(
          stopSubmit('login', {
            _error: message,
          })
        );
      }
    });
  };
};

//for Logout
export const setLogoutUserThunkCreator = () => {
  return (dispatch) => {
    //we get profile info
    authAPI.logout().then((response) => {
      console.log(response.data);
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataThunkCreator(null, null, null, false));
      }
    });
  };
};

export default authReducer;
