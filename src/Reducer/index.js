import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import friend from "./Friend";

export default combineReducers({
  friend,
  form: formReducer,
});
