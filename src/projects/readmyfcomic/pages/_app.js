/* eslint-disable react/no-danger */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="Read My F* Comic"
      description="Plataforma óptima en que autores y lectores de todo el mundo pueden compartir y leer cómics de forma gratuita sin restricción de estilo y contenido."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Read My F* Comic',
        description:
          'Plataforma Plataforma óptima en que autores y lectores de todo el mundo pueden compartir y leer cómics de forma gratuita sin restricción de estilo y contenido.',
        site_name: 'Read My F* Comic',
        images: [
          {
            url: `${constants.URL}/page.png`,
            width: 1366,
            height: 635,
            alt: 'Imagen 1'
          },
          {
            url: `${constants.URL}/favicon.png`,
            width: 96,
            height: 96,
            alt: 'Imagen 2'
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
