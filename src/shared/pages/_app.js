import { Provider, useDispatch } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import { useRouter } from 'next/router';

import commonReducer from '../reducers';
import Alerts from '../../components/Alerts';
import { showProject } from '../../services/api/project';
import { setProject } from '../actions/project';
import { initSentry } from '../../utils/sentry';
import { setQueryParams } from '../actions/queryParams';

const ReduxFiller = props => {
  const dispatch = useDispatch();
  const { constants } = props;
  const router = useRouter();
  const { query } = router || { query: {} };

  const isAdminPage = process.browser && window.location.pathname === '/admin';

  if (!isAdminPage) {
    showProject(constants.PROJECT_CODE).then(project => {
      dispatch(setProject(project));
      initSentry(project.sentry_settings.dsn);
    });
  }

  useEffect(() => {
    dispatch(setQueryParams(query));
  }, [query]);

  return <div />;
};

ReduxFiller.propTypes = {
  constants: PropTypes.shape({ PROJECT_CODE: PropTypes.string.isRequired }).isRequired
};

const getApp = (reducer, constants, AppendComponent) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

  const App = ({ Component, pageProps }) => {
    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <>
        <AppendComponent />
        <Provider store={store}>
          <ReduxFiller constants={constants} />
          <Alerts />
          <Component {...pageProps} />
        </Provider>
      </>
    );
  };

  App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired
  };

  return App;
};

export default getApp;
