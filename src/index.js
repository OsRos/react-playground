import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// console.log(messages)
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hc7xqxh3.us.auth0.com"
      clientId="ZLeVS1VtgRm96P983KxXOVQZo1yTtJGY"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
