import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => (
  <div className="dashboardLayout">
    <Navbar />
    <Sidebar />
    {children}
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
