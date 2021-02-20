/* eslint-disable react/no-danger */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import 'aos/dist/aos.css';
import '../styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <>
    <NextSeo
      title="We-Chatbot"
      description="Somos una empresa especializada en el desarrollo de chatbots. Ofrecemos chatbots + chat en tiempo real para los canales Web, Telegram, Slack, Line y Viber"
      canonical={constants.URL}
      openGraph={{
        url: constants.URL,
        title: 'We-Chatbot',
        description:
          'Somos una empresa especializada en el desarrollo de chatbots. Ofrecemos chatbots + chat en tiempo real para los canales Web, Telegram, Slack, Line y Viber',
        site_name: 'We-Chatbot',
        images: [
          {
            url:
              'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/we-chatbot-banner.png?alt=media&token=714cb48c-c71f-44c4-b79f-91c87c13a209',
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
    </Head>
  </>
);

export default getApp({}, constants, AppendHead);
