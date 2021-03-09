import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Content = props => {
  const navbarHeight = useSelector(store => store.navbarHeight);
  const sidebarWidth = useSelector(store => store.sidebarWidth);

  return (
    <div className="content">
      {props.children}
      <style jsx>
        {`
          .content {
            position: absolute;
            left: ${sidebarWidth}px;
            top: ${navbarHeight}px;
            width: calc(100% - ${sidebarWidth}px);
            height: calc(100% - ${navbarHeight}px);
            transition: 0.7s;
          }
        `}
      </style>
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.any.isRequired
};

export default Content;
