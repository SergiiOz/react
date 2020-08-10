import { setAuthUserDataThunkCreator } from './auth-reducer';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// ACTION CREATOR
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

//THUNK CREATOR
export const initializeAppThunkCreator = () => {
  return (dispatch) => {
    let promise = dispatch(setAuthUserDataThunkCreator());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
