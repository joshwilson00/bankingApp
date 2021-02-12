import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
require('dotenv').config()

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT}
    redirectUri={window.location.origin}
    scope="openid email profile"
    audience={process.env.REACT_APP_AUTH0_AUDIENCE}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
