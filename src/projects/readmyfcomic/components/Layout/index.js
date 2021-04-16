import PropTypes from 'prop-types';

import Title from './Title';
import ButtonPanel from './ButtonPanel';
import Right from './Right';

const Layout = ({ children, page }) => (
  <div className="layout">
    <Title />
    <ButtonPanel page={page} />
    <Right />
    <div className="children">{children}</div>
    <style jsx>
      {`
        .layout {
          height: fit-content;
        }
        .children {
          width: 70%;
          margin-left: 15%;
          padding-bottom: 25px;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.any
};

Layout.defaultProps = {
  children: ''
};

export default Layout;
