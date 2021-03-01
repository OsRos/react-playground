import { combineReducers } from "redux";
import todo from "./Todo/reducer";
import user from "./core/User/reducer"
export default combineReducers({ todo, user });
