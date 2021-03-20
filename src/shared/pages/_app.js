import { Provider, useDispatch } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import { useRouter } from 'next/router';

import commonReducer from '../reducers';
import Alerts from '../../components/Alerts';
import { showProject } from '../../services/api/project';
import { setProject } from '../actions/project';
import { setUser } from '../actions/user';
import { initSentry } from '../../utils/sentry';
import { setQueryParams } from '../actions/queryParams';
import { setLanguage } from '../actions/language';
import { getSessions } from '../../services/api/session';
import useHandleError from '../hooks/useHandleError';
import { setSession } from '../actions/session';
import useChangeLanguage from '../hooks/useChangeLanguage';

import ErrorMessage from './ErrorMessage';

const ReduxFiller = props => {
  const dispatch = useDispatch();
  const handleError = useHandleError();
  const changeLanguage = useChangeLanguage();
  const { constants } = props;
  const router = useRouter();
  const { query } = router || { query: {} };

  const isAdminPage = process.browser && window.location.pathname === '/admin';

  useEffect(() => {
    if (!isAdminPage) {
      showProject(constants.PROJECT_CODE)
        .then(({ data: project }) => {
          dispatch(setProject(project));
          initSentry(project.sentry_settings.dsn);
          if (project.disabled) props.onError('disabled');
        })
        .catch(error => {
          if (error.response && error.response.status === 404) return props.onError('notFound');
          throw error;
        });
    }
  }, []);

  useEffect(() => {
    changeLanguage(constants.DEFAULT_LANGUAGE, false);
  }, []);

  if (constants.HAS_LOGIN) {
    getSessions()
      .then(({ data: sessions }) => {
        const [session] = sessions;
        if (!session) return dispatch(setSession({ user: null }));
        const { user: newUser } = session;

        dispatch(setUser(newUser));
        dispatch(setSession(session));
      })
      .catch(handleError);
  }

  useEffect(() => {
    dispatch(setQueryParams(query));
  }, [query]);

  return <div />;
};

ReduxFiller.propTypes = {
  onError: PropTypes.func.isRequired,
  constants: PropTypes.shape({
    PROJECT_CODE: PropTypes.string.isRequired,
    HAS_LOGIN: PropTypes.bool.isRequired,
    DEFAULT_LANGUAGE: PropTypes.string.isRequired
  }).isRequired
};

const getApp = (reducer, constants, AppendComponent) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

  const App = ({ Component, pageProps }) => {
    const [errorCode, setErrorCode] = useState(null);
    const [wasNotFound, setWasNotFound] = useState(false);

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <>
        <AppendComponent />
        <Provider store={store}>
          <ReduxFiller constants={constants} onError={setErrorCode} />
          {errorCode && <ErrorMessage code={errorCode} />}
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
