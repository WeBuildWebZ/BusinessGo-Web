import PropTypes from 'prop-types';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
