import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import PageRouter from './PageRouter';
import { AppProvider } from 'store';

// import classNames from 'classnames/bind';
// import styles from './style.scss';
// const cx = classNames.bind(styles);

import { createStore } from 'redux';
import modules from './modules';
import { Provider } from 'react-redux';
const store = createStore(modules);

ReactDOM.render(
  // <React.StrictMode>
  <AppProvider>
    <Provider store={store}>
      <PageRouter />
    </Provider>
  </AppProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);