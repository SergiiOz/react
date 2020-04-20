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

export default store;
