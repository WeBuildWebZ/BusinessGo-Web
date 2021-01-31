import Head from 'next/head';
import { Modal, PopoverTitle } from 'react-bootstrap';

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
    <title>Construcción Pilar</title>
    <link rel="icon" href="/favicon.ico" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,800;1,600&family=Raleway:wght@300;400;500&display=swap"
      rel="stylesheet"
    />

    {/* etiquetas og facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Construcción Pilar" />
    <meta
      property="og:description"
      content="Construcción Pilar, el mejor precio en construcción de piscinas."
    />
    <meta property="og:image" content="/page.png" />
    <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="450" />
    <meta property="og:url" content="https://www.construccionpilar.dancotll.com" />
    <meta property="og:site_name" content="Construcción Pilar" />
    {/* aditional */}
    <meta name="author" content="Construcción Pilar" />
    <meta name="copyright" content="Construcción Pilar" />
    <meta name="description" content="Construcción Pilar, el mejor precio en construcción de piscinas." />
  </Head>
);

// export default getApp(reducer, constants, AppendHead);
const App = () => (
  <Modal show backdrop="static">
    <Modal.Header>
      <PopoverTitle>Web temporalmente deshabilitada</PopoverTitle>
    </Modal.Header>
    <Modal.Body>
      Esta web se encuentra temporalmente deshabilitada. Para más información consulte con el administrador
    </Modal.Body>
  </Modal>
);

export default App;
