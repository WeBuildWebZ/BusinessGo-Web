import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="Ordenando Y más"
      description="Somos tu empresa de orden y organización, recupera el control de tu casa, que el caos no te invada optimizamos los espacios de tu casa, facilitando y aportando una mejor funcionalidad."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Ordenando Y más',
        description:
          'Somos tu empresa de orden y organización, recupera el control de tu casa, que el caos no te invada optimizamos los espacios de tu casa, facilitando y aportando una mejor funcionalidad.',
        site_name: 'Ordenando Y más',
        images: [
          {
            url: `${constants.URL}/images/page.png`,
            width: 800,
            height: 391,
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
    {process.browser && !window.location.pathname.startsWith('/admin') && (
      <script
        src="https://www.widgets.webuildwebz.com/include.js"
        data-webuildwebz-project-token="73DCF74F122A4FACADD7B522EC826B8B68594F4D"
      />
    )}
  </>
);

export default getApp({}, constants, AppendHead);
