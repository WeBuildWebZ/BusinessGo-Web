import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/globals.css';

import Cart from '../../../components/Cart2';
import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = router => (
  <>
    <NextSeo
      title="Femelibros"
      description="Ayudamos a mujeres emprendedoras que buscan pasar su negocio al mundo DIGITAL."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Femelibros',
        description: 'Ayudamos a mujeres emprendedoras que buscan pasar su negocio al mundo DIGITAL.',
        site_name: 'Femelibros',
        images: [
          {
            url: `${constants.URL}/images/page.png`,
            width: 551,
            height: 344,
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
      {typeof window === 'object' && (
        <script
          src="https://www.widgets.webuildwebz.com/include.js"
          data-webuildwebz-project-token="a16440c3e3064d09937ab355761cc762c5d04f70"
        />
      )}
    </Head>
    <Cart />
  </>
);

export default getApp({}, constants, AppendHead);
