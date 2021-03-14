import { useSelector } from 'react-redux';

import Banner from '../Banner';

import { getLanguage } from './lang';

const topImages = [
  '/images/comics/top1.png',
  '/images/comics/top2.png',
  '/images/comics/top3.png',
  '/images/comics/top4.png'
];

const hotImages = [
  '/images/comics/new1.png',
  '/images/comics/new2.png',
  '/images/comics/new3.png',
  '/images/comics/new4.png'
];

const newImages = [
  '/images/comics/new1.png',
  '/images/comics/new2.png',
  '/images/comics/new3.png',
  '/images/comics/new4.png'
];

const Banners = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      <Banner
        title={language.topN}
        images={topImages}
        button={{ text: language.discoverMoreComics, href: '#' }}
      />
      <Banner title={language.hotChapters} images={hotImages} />
      <Banner title={language.newComics} images={newImages} />
    </>
  );
};

export default Banners;
