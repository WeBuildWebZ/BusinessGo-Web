import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import PropTypes from 'prop-types';

import 'react-phone-number-input/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/globals.css';

import EnsureLoaded from '../../../components/EnsureLoaded';
import commonReducer from '../../../reducers';
import reducer from '../reducers';

const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BusinessGo!</title>
      </Head>
      <Provider store={store}>
        <EnsureLoaded>
          <Component {...pageProps} />
        </EnsureLoaded>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};
