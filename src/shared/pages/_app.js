import { Provider, useDispatch } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';
import { useEffect } from 'react';
import AOS from 'aos';

import commonReducer from '../reducers';
import Chatbot from '../../components/Chatbot';
import AlertStack from '../../components/AlertStack';
import { showProject } from '../../services/api/project';
import { setProject } from '../actions/project';
import { initSentry } from '../../utils/sentry';

const ReduxFiller = props => {
  const dispatch = useDispatch();
  const { constants } = props;

  const isAdminPage = process.browser && window.location.pathname === '/admin';

  if (!isAdminPage) {
    showProject(constants.PROJECT_CODE).then(({ data: project }) => {
      dispatch(setProject(project));
      initSentry(project.sentry_settings.dsn);
    });
  }
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
          <AlertStack position={constants.ALERT_STACK_POSITION} />
          <Chatbot />
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
