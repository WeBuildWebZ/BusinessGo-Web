import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const DashboardLayout = ({ children }) => (
  <div className="dashboardLayout">
    <Navbar />
    <Sidebar />
    <Content>{children}</Content>
    <style jsx>
      {`
        .dashboardLayout {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: skyblue;
        }
      `}
    </style>
  </div>
);

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired
};
export default DashboardLayout;
