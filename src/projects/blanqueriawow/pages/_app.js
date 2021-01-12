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
    <title>Blanquería Wow</title>
    <link rel="icon" href="/favicon.ico" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,800;1,600&family=Raleway:wght@300;400;500&display=swap"
      rel="stylesheet"
    />

    {/* etiquetas og facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Blanquería Wow" />
    <meta property="og:description" content="Blanquería Wow, el mejor precio para el confort de tu hogar." />
    <meta property="og:image" content="/page.png" />
    <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="450" />
    <meta property="og:url" content="https://blanqueriawow.com/" />
    <meta property="og:site_name" content="Blanquería Wow" />
    {/* aditional */}
    <meta name="author" content="Blanquería Wow" />
    <meta name="copyright" content="Blanquería Wow" />
    <meta name="description" content="Blanquería Wow, el mejor precio para el confort de tu hogar." />
  </Head>
);

export default getApp(reducer, constants, AppendHead);
