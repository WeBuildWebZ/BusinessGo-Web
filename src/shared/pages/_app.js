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

import DisabledPage from './DisabledPage';

const ReduxFiller = props => {
  const dispatch = useDispatch();
  const handleError = useHandleError();
  const { constants } = props;
  const router = useRouter();
  const { query } = router || { query: {} };

  const isAdminPage = process.browser && window.location.pathname === '/admin';

  useEffect(() => {
    if (!isAdminPage) {
      showProject(constants.PROJECT_CODE).then(project => {
        dispatch(setProject(project));
        initSentry(project.sentry_settings.dsn);
        if (project.disabled) props.onDisabled();
      });
    }
  }, []);

  dispatch(setLanguage(constants.DEFAULT_LANGUAGE));

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
  onDisabled: PropTypes.func.isRequired,
  constants: PropTypes.shape({
    PROJECT_CODE: PropTypes.string.isRequired,
    HAS_LOGIN: PropTypes.bool.isRequired,
    DEFAULT_LANGUAGE: PropTypes.string.isRequired
  }).isRequired
};

const getApp = (reducer, constants, AppendComponent) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

  const App = ({ Component, pageProps }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
      AOS.init();
    }, []);

    return (
      <>
        <AppendComponent />
        <Provider store={store}>
          <ReduxFiller constants={constants} onDisabled={() => setIsDisabled(true)} />
          {isDisabled && <DisabledPage />}
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
