import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";
import LanguageProvider from "./LanguageProvider";
import Menu from "./Menu";
import RandomUser from "./RandomUser";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import Todo from "./Todo";
// console.log(messages)
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter></Counter> */}
    <Provider store={store}>
      <LanguageProvider>
        <ErrorBoundary>
          <Router>
            <Menu></Menu>
            <Switch>
              <Route path="/todo/:id" component={Todo}></Route>
              <Route path="/randomUser" component={RandomUser}></Route>
              <Route path="/counter" component={Counter}></Route>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/" component={App}></Route>
            </Switch>
          </Router>
        </ErrorBoundary>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
