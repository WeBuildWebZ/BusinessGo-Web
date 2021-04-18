import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="Carpediem"
      description="Somos una distribuidora de bebidas y anexos para kioscos, almacenes y supermercados. Venta minorista y mayorista con sede central en Villa Mercedes provincia de San Luis. Desde el año 2012 abastece a todo el país, llevando las mejores marcas al más bajo precios."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Carpediem',
        description:
          'Somos una distribuidora de bebidas y anexos para kioscos, almacenes y supermercados. Venta minorista y mayorista con sede central en Villa Mercedes provincia de San Luis. Desde el año 2012 abastece a todo el país, llevando las mejores marcas al más bajo precios.',
        site_name: 'Carpediem',
        images: [
          {
            url: `${constants.URL}/images/page.png`,
            width: 417,
            height: 237,
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
