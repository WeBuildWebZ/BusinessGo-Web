import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import getApp from '../../../shared/pages/_app';
import '../../../styles/globals.css';
import '../../../styles/Home.module.css';
import reducer from '../reducers';
import * as constants from '../constants';

import './index.css';

const AppendHead = () => (
  <Head>
    <title>Performance System Automotive</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default getApp(reducer, constants, AppendHead);
