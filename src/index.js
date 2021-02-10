import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Counter from "./Counter";
import RandomUser from "./RandomUser";
import Todo from "./Todo";
import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter></Counter> */}
    <Provider store={store}>
      <ErrorBoundary>
        <Todo></Todo>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
