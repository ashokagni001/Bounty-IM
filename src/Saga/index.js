import {takeLatest} from "redux-saga/effects";
import action from "../Action/ActionTypes";
import {getAllFriends} from "./Friend";

export default function* saga() {
  yield takeLatest(action.GET_ALL_FRIENDS, getAllFriends);
}
