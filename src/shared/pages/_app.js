import { Provider, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';

import commonReducer from '../reducers';
import AlertStack from '../../components/AlertStack';
import { showProject } from '../../services/api/project';
import { setProject } from '../actions/project';

const ReduxFiller = props => {
  const dispatch = useDispatch();
  const { constants } = props;

  showProject(constants.PROJECT_CODE).then(({ data: project }) => {
    dispatch(setProject(project));
  });
  return <div />;
};

ReduxFiller.propTypes = {
  constants: PropTypes.shape({ PROJECT_CODE: PropTypes.string.isRequired }).isRequired
};

const getApp = (reducer, constants, AppendComponent) => {
  const store = createStore(combineReducers({ ...commonReducer, ...reducer }));

  const App = ({ Component, pageProps }) => (
    <>
      <AppendComponent />
      <Provider store={store}>
        <ReduxFiller constants={constants} />
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