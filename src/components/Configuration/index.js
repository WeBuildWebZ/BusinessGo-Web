import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getSessions } from '../../services/api/session';
import { getClientModels } from '../../services/api/user';
import { setUser } from '../../shared/actions/user';
import { setClientModels } from '../../shared/actions/clientModels';
import { setSelectedClientModel } from '../../shared/actions/selectedClientModel';
import LoadingPage from '../LoadingPage';

import Background from './components/background';
import Title from './components/title';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Configuration = props => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const selectedClientModel = useSelector(store => store.selectedClientModel);
  const adminSection = useSelector(store => store.adminSection);
  const project = useSelector(store => store.project);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSessions().then(({ data: sessions }) => {
      setLoading(false);
      if (!sessions[0]) return;
      const [{ user: newUser }] = sessions;

      dispatch(setUser(newUser));
    });
  }, [dispatch]);

  return (
    <div className="Configuration">
      <Background backgroundImage={props.backgroundImage} />
      {loading && <LoadingPage />}
      {!loading && (
        <>
          {user && (
            <>
              {project && <Title title={`${project.name} / Admin`} />}
              <Dashboard />
            </>
          )}
          {!user && <Login />}
        </>
      )}
      <style jsx>
        {`
          .Configuration {
            position: absolute;
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
      <style jsx global>
        {`
          * {
            overflow-x: unset;
          }
        `}
      </style>
    </div>
  );
};

Configuration.propTypes = {
  backgroundImage: PropTypes.string
};
Configuration.defaultProps = {
  backgroundImage: ''
};

export default Configuration;
