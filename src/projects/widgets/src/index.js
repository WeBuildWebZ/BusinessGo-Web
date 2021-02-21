import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Chatbot from './components/Chatbot';
import store from './store';

const App = () => (
  <>
    <Chatbot />
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('webuildwebz-widgets')
);
