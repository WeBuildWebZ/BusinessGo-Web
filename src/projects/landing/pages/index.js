import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getSessions } from '../../../services/api/session';
import LoadingPage from '../../../components/LoadingPage';
import Navbar from '../../../components/Navbar';
import { setUser } from '../../../shared/actions/user';
import Banner from '../components/banner';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getSessions().then(({ data }) => {
      setLoading(false);
      if (!data.length) return;
      dispatch(setUser(data[0].user));
    });
  }, [dispatch]);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <Navbar />
      <Banner />
    </>
  );
}
