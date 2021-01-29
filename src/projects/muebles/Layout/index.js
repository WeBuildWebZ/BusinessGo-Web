import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '../components/navbar';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Muebles Horacio</title>
    </Head>
    <Navbar />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
