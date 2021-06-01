import PropTypes from 'prop-types';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div className="children">{children}</div>
    <Footer />
    <style jsx>
      {`
        .children {
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
