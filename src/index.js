import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './Counter';
import RandomUser from './RandomUser';
import Todo from './Todo';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter></Counter> */}
    <ErrorBoundary><Todo></Todo></ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
