/* eslint-disable react/no-danger */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="Muebleria Horacio"
      description="Somos una tienda de Muebles a medida. Distribuimos en Buenos Aires."
      canonical={constants.URL}
      openGraph={{
        url: `${constants.URL}/`,
        title: 'Muebleria - Horacio',
        description: 'Somos una tienda de Muebles a medida. Distribuimos en Buenos Aires',
        site_name: 'Muebleria Horacio',
        images: [
          {
            url: `${constants.URL}/images/page_1.png`,
            width: 900,
            height: 382,
            alt: 'Imagen 1'
          },
          {
            url: `${constants.URL}/images/page_2.png`,
            width: 900,
            height: 414,
            alt: 'Imagen 2'
          },
          {
            url: `${constants.URL}/images/page_3.png`,
            width: 900,
            height: 412,
            alt: 'Imagen 3'
          }
        ]
      }}
      twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
    />
    <Head>
      <link rel="icon" href="/icon/home-solid.svg" />
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
