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
      title="DancotLL Software"
      description="Somos una empresa de desarrollo web. Hacemos webs/apps móviles profesionales a medida"
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'DancotLL Software',
        description: 'Somos una empresa de desarrollo web. Hacemos webs/apps móviles profesionales a medida',
        site_name: 'DancotLL Software',
        images: [
          {
            url: `${constants.URL}/images/page.png`,
            width: 1366,
            height: 635,
            alt: 'Imagen 1'
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
