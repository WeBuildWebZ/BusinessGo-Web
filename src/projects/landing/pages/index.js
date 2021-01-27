import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getSessions } from '../../../services/api/session';
import LoadingPage from '../../../components/LoadingPage';
import Navbar from '../../../components/Navbar';
import { setUser } from '../../../shared/actions/user';
import Banner from '../components/banner';

export default function LandingPage() {
  const [section, setSection] = useState('banner1');

  return (
    <>
      <Banner show={section === 'banner1'} onClose={() => setSection('banner2')} />
      <Banner show={section === 'banner2'} onClose={() => setSection('banner1')} />
    </>
  );
}
