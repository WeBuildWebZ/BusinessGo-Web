import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '../../landing/components/footer';
import Menu from '../components/navbar/menu';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Muebles Horacio</title>
    </Head>
    <Menu />
    <div>{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
