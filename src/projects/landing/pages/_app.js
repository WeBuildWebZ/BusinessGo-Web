import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import PropTypes from 'prop-types';

import 'react-phone-number-input/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/globals.css';

import commonReducer from '../../../reducers';
import reducer from '../reducers';

const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};
