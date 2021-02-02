import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from '@material-ui/core';

import { getSessions } from '../../../services/api/session';
import LoadingPage from '../../../components/LoadingPage';
import { setUser } from '../../../shared/actions/user';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import CardsPrices from '../components/card-prices';
import YouChoose from '../components/you-choose';
import Frase from '../components/frase';
import Texto from '../components/texto-principal';
import ItemsExplicacion from '../components/items-explicacion';
import BannerSegundo from '../components/segundo-banner';
import LogoBanner from '../components/logo-banner';
import Navbar from '../components/menu';
import Additional from '../components/aditional';

import { banners } from './banners';

export default function LandingPage() {
  const [selectedBanner, setSelectedBanner] = useState(0);

  const handleChangeBanner = () => {
    let newSelectedBanner = selectedBanner + 1;

    if (newSelectedBanner >= banners.length) newSelectedBanner = 0;

    setSelectedBanner(newSelectedBanner);
  };

  return (
    <>
      <LogoBanner />
      <Navbar />
      <Additional />
      {banners.map((banner, i) => (
        <Banner key={i} show={i === selectedBanner} onClose={handleChangeBanner} banner={banner} />
      ))}
      <BannerSegundo />
      <Frase />
      <Texto />
      <ItemsExplicacion />
      <YouChoose />
      <CardsPrices />
      <Footer />
    </>
  );
}
