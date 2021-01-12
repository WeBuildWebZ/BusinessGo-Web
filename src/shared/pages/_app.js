import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';

import commonReducer from '../reducers';
import AlertStack from '../../components/AlertStack';

const getApp = (reducer, constants) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

  const App = ({ Component, pageProps }) => (
    <>
      <Provider store={store}>
        <AlertStack position={constants.ALERT_STACK_POSITION} />
        <Component {...pageProps} />
      </Provider>
    </>
  );

  App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired
  };

  return App;
};

export default getApp;
