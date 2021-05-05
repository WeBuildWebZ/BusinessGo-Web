import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setUser } from '../shared/actions/user';
import { getSessions } from '../services/api/session';

import LoadingPage from './LoadingPage';

const EnsureLoggedIn = props => {
  const dispatch = useDispatch();
  const session = useSelector(store => store.session);

  if (!session) return <props.Loading />;
  if (!session.user) {
    if (!process.browser) return <div />;
    if (props.redirectOnNotLoggedIn) {
      window.location.href = props.redirectOnNotLoggedIn;
      return <div />;
    }
  }

  if (session.user && props.redirectOnLoggedIn) {
    window.location.href = props.redirectOnLoggedIn;
    return <div />;
  }

  return <>{props.children}</>;
};

EnsureLoggedIn.propTypes = {
  children: PropTypes.any.isRequired,
  redirectOnNotLoggedIn: PropTypes.string,
  redirectOnLoggedIn: PropTypes.string,
  Loading: PropTypes.any.isRequired
};

EnsureLoggedIn.defaultProps = {
  redirectOnNotLoggedIn: '/login',
  redirectOnLoggedIn: ''
};

export default EnsureLoggedIn;
