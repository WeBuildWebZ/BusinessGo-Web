import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/globals.css';

import commonReducer from '../../../reducers';
import reducer from '../reducers';
import './index.css';

const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Performance System Automotive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};
