import Head from 'next/head';

// global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

import '../assets/css/styles.scss';
import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';
import reducer from '../reducers';

const AppendHead = () => (
  <Head>
    <title>Blanquería Wow • El mejor precio en blanquería</title>
    <link rel="icon" href="/favicon.png" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,800;1,600&family=Raleway:wght@300;400;500&display=swap"
      rel="stylesheet"
    />

    {/* etiquetas og facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blanquería Wow" />
    <meta property="og:title" content="Blanquería Wow" />
    <meta
      property="og:description"
      content="Somos una empresa familiar Argentina, radicada en Mar del Plata, y distribuimos a todo el país. El equilibrio justo entre calidad y precio."
    />
    <meta property="og:image" content="/page.png" />
    <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="450" />
    <meta property="og:url" content="https://blanqueriawow.com/" />
    <meta property="og:site_name" content="Blanquería Wow" />
    {/* aditional */}
    <meta
      name="description"
      content="Somos una empresa familiar Argentina, radicada en Mar del Plata, y distribuimos a todo el país. El equilibrio justo entre calidad y precio."
    />
    <meta name="DC.Language" scheme="RFC1766" content="Spanish" />
    <meta name="author" content="WeBuildWebZ" />
    <meta name="reply-to" content="contact@dancotll.com" />
    <meta name="copyright" content="WeBuildWebZ" />
    <meta
      name="keywords"
      content="blanqueria wow,mar del plata,el mejor precio, WeBuildWebZ, mayorista de blanqueria"
    />
    <meta name="Resource-type" content="Catalog" />
    <meta name="DateCreated" content="Mon, 18 January 2021 00:00:00 GMT+1" />
  </Head>
);

export default getApp(reducer, constants, AppendHead);
