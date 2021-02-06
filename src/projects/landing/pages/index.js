import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from '@material-ui/core';

import { getSessions } from '../../../services/api/session';
import LoadingPage from '../../../components/LoadingPage';
import { setUser } from '../../../shared/actions/user';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import Frase from '../components/frase';
import Texto from '../components/texto-principal';
import ItemsExplicacion from '../components/items-explicacion';
import BannerSegundo from '../components/segundo-banner';
import LogoBanner from '../components/logo-banner';
import Navbar from '../components/menu';
import Additional from '../components/aditional';
import Layout from '../layout';

const LandingPage = () => (
  <>
    <Layout>
      <Banner />
      <BannerSegundo />
      <Frase />
      <Texto />
      <ItemsExplicacion />
    </Layout>
  </>
);

export default LandingPage;
