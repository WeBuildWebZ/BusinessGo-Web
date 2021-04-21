import PropTypes from 'prop-types';

import Menu from '../../components/1-menu';
import Footer from '../../components/footer';
import Navbar from '../../components/1-menu/navbar';

const Layout = ({ children }) => (
  <>
    <Menu />
    <Navbar />

    <div>{children}</div>
    <Footer />
  </>
);
Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
