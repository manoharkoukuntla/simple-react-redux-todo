import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

export const history = createBrowserHistory();

let middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware,routerMiddleware(history))
);

export default createStore(connectRouter(history)(rootReducer), middleware);
