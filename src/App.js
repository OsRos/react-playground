import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import DatePicker from "./DatePicker";
import ErrorBoundary from "./ErrorBoundary";
import LanguageProvider from "./LanguageProvider";
import Menu from "./Menu";
import RandomUser from "./RandomUser";
import store from "./store";
import Todo from "./Todo";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  return (
    <Provider store={store}>
      <LanguageProvider>
        <ErrorBoundary>
          <Router>
            {isLoading ? (
              <div>Loading...</div>
            ) : isAuthenticated ? (
              <>
                <Menu></Menu>
                <Switch>
                  <Route path="/todo/:id" component={Todo}></Route>
                  <Route path="/randomUser" component={RandomUser}></Route>
                  <Route path="/counter" component={Counter}></Route>
                  <Route path="/todo" component={Todo}></Route>
                  <Route component={DatePicker}></Route>
                </Switch>
              </>
            ) : (
              <>
                <button onClick={loginWithRedirect}>Login</button>
              </>
            )}
          </Router>
        </ErrorBoundary>
      </LanguageProvider>
    </Provider>
  );
}

export default App;
