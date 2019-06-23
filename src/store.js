import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Should return reducers within the application.
import authReducer from "./reducers/auth";
import errorReducer from "./reducers/error";
import timesReducer from "./reducers/times";
import uiRedcuer from "./reducers/ui";

export const reducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
  times: timesReducer,
  ui: uiRedcuer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  {
    auth: authReducer
  },
  composeEnhancers(applyMiddleware(thunk))
);
