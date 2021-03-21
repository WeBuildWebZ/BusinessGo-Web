import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="WeBuildWebZ"
      description="Somos una empresa de desarrollo web. Hacemos webs/apps móviles profesionales a medida"
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'WeBuildWebZ',
        description: 'Somos una empresa de desarrollo web. Hacemos webs/apps móviles profesionales a medida',
        site_name: 'WeBuildWebZ',
        images: [
          {
            url:
              'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc',
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
      {process.browser &&
        !window.location.pathname.startsWith('/admin') &&
        !window.location.pathname.startsWith('/dashboard') && (
          <script
            src="https://www.widgets.webuildwebz.com/include.js"
            data-webuildwebz-project-token="73DCF74F122A4FACADD7B522EC826B8B68594F4D"
          />
        )}
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
