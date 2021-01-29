import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getSessions } from '../../../services/api/session';
import LoadingPage from '../../../components/LoadingPage';
import Navbar from '../../../components/Navbar';
import { setUser } from '../../../shared/actions/user';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import CardsPrices from '../components/card-prices';

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
      {banners.map((banner, i) => (
        <Banner key={i} show={i === selectedBanner} onClose={handleChangeBanner} banner={banner} />
      ))}
      <CardsPrices />
      <Footer />
    </>
  );
}
