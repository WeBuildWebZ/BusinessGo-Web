import Banner from '../components/banner';
import Paragraphs from '../components/paragraphs';

import Layout from './layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Paragraphs />
      </Layout>
    </>
  );
}
