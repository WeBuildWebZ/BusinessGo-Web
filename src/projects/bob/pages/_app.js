import { useEffect, useState } from 'react';
import { Modal, PopoverTitle } from 'react-bootstrap';
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
import { writeWithAnimation } from '../../../utils/writeAnimation';

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
const App = () => {
  const title = 'Web temporalmente deshabilitada';
  const message =
    'Esta web se encuentra temporalmente deshabilitada. Para más información consulte con el administrador';
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    writeWithAnimation(title, newTitle => {
      setCurrentTitle(newTitle);
    });

    writeWithAnimation(
      message,
      newMessage => {
        setCurrentMessage(newMessage);
      },
      30
    );
  }, []);

  return (
    <Modal show backdrop="static" className="app">
      <Modal.Header>
        <PopoverTitle>{currentTitle}</PopoverTitle>
      </Modal.Header>
      <Modal.Body>{currentMessage}</Modal.Body>
    </Modal>
  );
};

export default App;
