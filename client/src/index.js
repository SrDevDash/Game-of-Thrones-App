import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
