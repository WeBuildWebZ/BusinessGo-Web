import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const DashboardLayout = props => (
  <div className="dashboardLayout">
    <Navbar
      breadcrumbItems={props.breadcrumbItems}
      pageTitle={props.pageTitle}
      backTitle={props.backTitle}
      backHref={props.backHref}
    />
    <Sidebar buttons={props.sidebarButtons} />
    <Content>{props.children}</Content>
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
  children: PropTypes.any,
  backTitle: PropTypes.string,
  backHref: PropTypes.string,
  pageTitle: PropTypes.string,
  breadcrumbItems: PropTypes.array.isRequired,
  sidebarButtons: PropTypes.array.isRequired
};

DashboardLayout.defaultProps = {
  children: '',
  backTitle: '',
  backHref: '',
  pageTitle: ''
};

export default DashboardLayout;
