import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const middlewares = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
