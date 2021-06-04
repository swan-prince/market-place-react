import React from "react";
import ReactDOM from "react-dom";

import { Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import App from "./layouts/App";
import reducers from "./redux/reducers";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(reducers, composeEnhances(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
