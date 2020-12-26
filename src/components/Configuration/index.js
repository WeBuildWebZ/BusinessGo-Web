import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getSessions } from '../../services/session';
import { setUser } from '../../actions/user';
import LoadingPage from '../../components/LoadingPage';

import useStyle from './style';
import Background from './components/background';
import Title from './components/title';
import Login from './components/login';

const Configuration = props => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const user = useSelector(_ => _.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSessions().then(({ data }) => {
      setLoading(false);
      if (!data[0]) return;
      dispatch(setUser(data[0].user));
    });
  }, [dispatch]);

  return (
    <>
      <Background backgroundImage={props.backgroundImage} />
      <Title title={props.title} />
      {loading && <LoadingPage />}
      {!loading && (
        <>
          {user && <div>Configuración</div>}
          {!user && <Login />}
        </>
      )}
    </>
  );
};

Configuration.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string
};
Configuration.defaultProps = {
  backgroundImage: '',
  title: ''
};

export default Configuration;
