import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';
import { getAssetUrl } from '../../../utils/assets';

const AppendHead = () => (
  <>
    <NextSeo
      title="Beast Cards"
      description="Beast Cards es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu estrategia y sé el mejor entrenador de bestias del metaverso."
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'Beast Cards',
        description:
          'Beast Cards es el 1er juego play-to-play y play-to-earn del mundo, juega contra otro jugador para obtener rendimientos en $BC en las diferentes arenas de combates, mejora tu mazo, prepara tu estrategia y sé el mejor entrenador de bestias del metaverso.',
        site_name: 'Beast Cards',
        images: [
          {
            url: 'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc',
            width: 1366,
            height: 635,
            alt: 'Imagen 1'
          },
          {
            url: `${constants.URL}/favicon.ico`,
            width: 96,
            height: 96,
            alt: 'Imagen 2'
          }
        ]
      }}
      twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
    />
    <Head>
      <link rel="icon" href={getAssetUrl('images/logo.png')} />
      {/* Discomment in order to add widgets */}
      {/* {process.browser && (
        <script
          src="https://www.widgets.webuildwebz.com/include.js"
          data-webuildwebz-project-token="73DCF74F122A4FACADD7B522EC826B8B68594F4D"
        />
      )} */}
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
