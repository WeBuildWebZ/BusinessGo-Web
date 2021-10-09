import { Provider, useDispatch, useSelector } from 'react-redux';
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
  const session = useSelector(store => store.session);
  const { constants } = props;
  const router = useRouter();
  const { query } = router || { query: {} };

  const isAdminPage = process.browser && window.location.pathname === '/admin';

  useEffect(() => {
    if (!isAdminPage && constants.HAS_CONFIGURATION) {
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
    const storedLanguage = localStorage.getItem('language');
    if (!storedLanguage) changeLanguage(constants.DEFAULT_LANGUAGE, false);
  }, []);

  useEffect(() => {
    if (!constants.HAS_SESSIONS || session) return;
    getSessions()
      .then(({ data: givenSessions }) => {
        const [newSession] = givenSessions;
        if (!newSession) return dispatch(setSession({ user: null }));
        const { user: newUser } = newSession;

        dispatch(setUser(newUser));
        dispatch(setSession(newSession));
      })
      .catch(handleError);
  }, [session]);

  useEffect(() => {
    dispatch(setQueryParams(query));
  }, [query]);

  return <div />;
};

ReduxFiller.propTypes = {
  onError: PropTypes.func.isRequired,
  constants: PropTypes.shape({
    PROJECT_CODE: PropTypes.string.isRequired,
    DEFAULT_LANGUAGE: PropTypes.string.isRequired,
    HAS_CONFIGURATION: PropTypes.bool.isRequired,
    HAS_SESSIONS: PropTypes.bool.isRequired
  }).isRequired
};

const getApp = (reducer, constants, AppendComponent) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));
  globalThis.getAssetUrl = (path, isShared) =>
    `https://images.webuildwebz.com/${encodeURIComponent(constants.PROJECT_CODE)}/${path}`;
  globalThis.getSharedAssetUrl = (path, isShared) =>
    `https://images.webuildwebz.com/${encodeURIComponent(constants.PROJECT_CODE)}/shared/${path}`;
  globalThis.constants = constants;

  const App = ({ Component, pageProps }) => {
    const [errorCode, setErrorCode] = useState(null);
    const [wasNotFound, setWasNotFound] = useState(false);

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <>
        <Provider store={store}>
          <AppendComponent />
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
