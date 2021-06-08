import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';
import reducers from '../reducers';

const AppendHead = () => (
  <>
    <NextSeo
      title="Más Negocio"
      description="Utiliza nuestra tecnología, y comparte tu tarjeta digital, para compartir tu información de contacto en 1 segundo."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Más Negocio',
        description:
          'Utiliza nuestra tecnología, y comparte tu tarjeta digital, para compartir tu información de contacto en 1 segundo.',
        site_name: 'Más Negocio',
        images: [
          {
            url: `${constants.URL}/images/page.png`,
            width: 600,
            height: 250,
            alt: 'Page Image'
          },
          {
            url: `${constants.URL}/favicon.png`,
            width: 96,
            height: 96,
            alt: 'icon'
          }
        ]
      }}
      twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
    />
    <Head>
      <link rel="icon" href="/favicon.png" />
      {process.browser && !window.location.pathname.startsWith('/cards') && (
        <script
          src="https://www.widgets.webuildwebz.com/include.js"
          data-webuildwebz-project-token="99E424DD30DD41248E5446C17CD137E3D18CA2D9"
        />
      )}
    </Head>
  </>
);

export default getApp(reducers, constants, AppendHead);
