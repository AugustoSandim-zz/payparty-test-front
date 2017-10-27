import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/login.css';
import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';
import { Router, Route, hashHistory } from 'react-router';
import { matchPattern } from 'react-router/lib/PatternUtils';
import registerServiceWorker from './registerServiceWorker';

function verifyAuthentication(nextState, replace) {
  const result = matchPattern('/list(/:login)', nextState.location.pathname)
  const addressPrivate = result.paramValues[0] === undefined;

  if(addressPrivate && localStorage.getItem('auth-token') === null) {
    replace('/?msg=Logue novamente')
  }
}

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={ Login }/>
      <Route path="/list(/:login)" component={ App } onEnter={ verifyAuthentication } />
      <Route path="/logout" component={ Logout } />
    </Router>
  ),
  document.getElementById('root')
);

registerServiceWorker();
