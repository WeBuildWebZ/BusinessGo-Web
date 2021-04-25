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
            width: calc(100% - ${sidebarWidth}px - 14px);
            height: calc(100% - ${navbarHeight + 14}px);
            margin: 14px 0 0 14px;
            transition: 0.7s;
            overflow-y: auto;
          }
        `}
      </style>
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.any
};

Content.defaultProps = {
  children: ''
};

export default Content;
