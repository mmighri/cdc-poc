import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Keycloak = window.Keycloak;

const keycloakConfig = {
  realm: 'CDC',
  url: 'https://auth.nuagike.com/auth',
  clientId: 'cdc_app'
}
let keycloak = new Keycloak(keycloakConfig);

console.log("start");
keycloak.init()
  .success((auth) => {

    console.log("then");

    if (!auth) {
         console.log("try to login");
         keycloak.login();

    } else {
        console.info("Authenticated");
        console.log(keycloak);

        localStorage.setItem("ACCESS_TOKEN", keycloak.token);
        localStorage.setItem("USER_PRINCIPAL",  JSON.stringify(keycloak.tokenParsed));
    }
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.getElementById('root')
    );
  }).error(() => {
      console.error("Authenticated Failed");
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
