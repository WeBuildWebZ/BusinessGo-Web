/* eslint-disable react/no-danger */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="Cosméticos en México"
      description="Somos una tienda de productos Omnilife y Cosmética. Distribuimos en México"
      canonical={constants.URL}
      openGraph={{
        url: `${constants.URL}/productos`,
        title: 'Productos - Cosméticos en México',
        description: 'Somos una tienda de productos Omnilife y Cosmética. Distribuimos en México',
        site_name: 'Cosméticos en México',
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
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
