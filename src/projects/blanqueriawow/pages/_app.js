import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';
import Router from 'next/router';

// global styles
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';
import * as gtag from '../utils/gtag';
import commonReducer from '../../../reducers';
import reducer from '../reducers';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', url => gtag.pageview(url));
}

const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

const App = ({ Component, pageProps }) => (
  <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;
