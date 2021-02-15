import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getSessions } from '../../../../services/api/session';
import { setSession } from '../../../../shared/actions/session';

import Title from './Title';
import ButtonPanel from './ButtonPanel';
import Right from './Right';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSessions().then(({ data: sessions }) => {
      if (!sessions[0]) return dispatch(setSession({ user: null }));

      dispatch(setSession(sessions[0]));
    });
  }, []);

  return (
    <div className="layout">
      <Title />
      <ButtonPanel />
      <Right />
      {children}
      <style jsx>
        {`
          .layout {
            height: fit-content;
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

Layout.defaultProps = {
  children: ''
};

export default Layout;
