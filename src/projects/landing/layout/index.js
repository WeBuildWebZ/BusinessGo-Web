import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '../components/footer';
import LogoBanner from '../components/logo-banner';
import Additional from '../components/aditional';
import Navbar from '../components/menu';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>WeBuildWebz</title>
    </Head>
    <LogoBanner />
    <Additional />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
