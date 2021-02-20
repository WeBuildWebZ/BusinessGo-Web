/* eslint-disable react/no-danger */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import '../assets/styles/globals.css';
import 'aos/dist/aos.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

let root;

if (process.browser) {
  const rootId = 'webuildwebz-widgets';
  root = document.getElementById(rootId);

  if (!root) {
    root = document.createElement('div');
    root.id = rootId;
  }
  document.body.appendChild(root);
}

export default getApp({}, constants, () => <div />, root);
