import { createStore, combineReducers, applyMiddleware } from 'redux';
import profilePageReducer from './profile-reducer';
import dialogsPageReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
  // our state
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

//added applyMiddleware with thunkMiddleware for work with thunk creators in reducer
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//it for display info in console
//example write in console: console.log(store.getState())
window.store = store;

export default store;
