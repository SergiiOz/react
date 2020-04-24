import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

let rootReducer = combineReducers({
  // our state
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
});

let store = createStore(rootReducer);

//it for display info in console
//example write in console: console.log(store.getState())
window.store = store;

export default store;
