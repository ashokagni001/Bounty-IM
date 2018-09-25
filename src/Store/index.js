import {createStore, applyMiddleware} from "redux";
import rootReducer from "../Reducer";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(saga);

export default store;
