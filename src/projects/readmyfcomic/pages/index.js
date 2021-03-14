import Layout from '../components/Layout';
import Patrocinators from '../components/Patrocinators';
import Banners from '../components/Banners';
import CheckForums from '../components/CheckForums';

const ReadMyFComic = () => (
  <Layout page="frontPage">
    <Patrocinators />
    <Banners />
    <CheckForums />
  </Layout>
);

export default ReadMyFComic;
