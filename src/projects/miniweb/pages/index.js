import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Banner from '../components/banner';
import Paragraphs from '../components/paragraphs';
import HowItWorks from '../components/HowItWorks';
import Templates from '../components/Templates';
import Clients from '../components/Clients';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Card from '../components/Card2';
import { getSubdomains } from '../../../utils/url';
import Spinner from '../../../components/Spinner';
import { listItems } from '../../../services/api/item';

import Layout from './layout';

export default function Home() {
  const project = useSelector(store => store.project);
  const [card, setCard] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const subdomains = typeof window === 'object' ? getSubdomains(window.location.hostname) : '';

  useEffect(() => {
    if (!project || !subdomains) return;

    listItems('card', project, 1, 1, { filters: { subdomain: subdomains } }).then(({ data: givenCards }) => {
      if (!givenCards.length) return setNotFound(true);
      setCard(givenCards[0]);
    });
  }, [project, subdomains]);

  if (notFound) return <h3>No encontramos la MiniWeb con subdominio {subdomains}</h3>;

  if (subdomains) {
    if (!card) return <Spinner />;
    return <Card card={card} />;
  }

  return (
    <div id="home">
      <Layout>
        <Banner />
        <Paragraphs />
        <HowItWorks />
        <Templates />
        <Clients />
        <Articles />
        <Contact />
      </Layout>
    </div>
  );
}
