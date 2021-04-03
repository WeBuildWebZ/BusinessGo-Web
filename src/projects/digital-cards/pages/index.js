import Banner from '../components/banner';
import Paragraphs from '../components/paragraphs';
import HowItWorks from '../components/HowItWorks';
import Templates from '../components/Templates';
import Clients from '../components/Clients';
import Articles from '../components/Articles';
import Contact from '../components/Contact';

import Layout from './layout';

export default function Home() {
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
