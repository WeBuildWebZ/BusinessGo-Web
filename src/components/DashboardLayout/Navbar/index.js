import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setNavbarHeight } from '../../../shared/actions/navbarHeight';
import BackButton from '../../../projects/dashboard/components/BackButton';

import Title from './Title';
import LogoutButton from './LogoutButton';

const Navbar = props => {
  const dispatch = useDispatch();
  const sidebarWidth = useSelector(store => store.sidebarWidth);
  const navbarHeight = 50;

  dispatch(setNavbarHeight(navbarHeight));

  return (
    <div className="navbar">
      <div className="backgroundImage" />
      <h2>{props.pageTitle}</h2>
      {props.backHref && (
        <div className="titleContainer">
          <BackButton href={props.backHref} />
          <h2 className="title">{props.backTitle}</h2>
        </div>
      )}
      {props.buttons && <div className="buttons">{props.buttons}</div>}
      {/* <Title breadcrumbItems={props.breadcrumbItems} /> */}
      <LogoutButton />
      <style jsx>
        {`
          .navbar {
            position: absolute;
            left: ${sidebarWidth}px;
            display: flex;
            width: calc(100% - ${sidebarWidth + 17}px);
            height: ${navbarHeight}px;
            align-items: center;
            border-bottom-right-radius: 14px;
            transition: 0.7s;
            z-index: 2;
          }
          .backgroundImage {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to right, #87ceeb99, #ebebeb99);
            filter: blur(2px);
            border-bottom-right-radius: 14px;
            z-index: 0;
          }
          .titleContainer {
            display: flex;
            align-items: center;
            margin-left: 21px;
            z-index: 2;
          }
          .title {
            margin: 14px;
          }
          .buttons {
            position: absolute;
            transform: translate(-100%);
            left: 100%;
            top: 100%;
          }
          @media only screen and (max-width: 768px) {
            .navbar {
              width: calc(100% - ${sidebarWidth}px);
            }
            .titleContainer {
              font-size: 8px;
              margin: 4px;
            }
          }
        `}
      </style>
    </div>
  );
};

Navbar.propTypes = {
  backTitle: PropTypes.string,
  backHref: PropTypes.string,
  pageTitle: PropTypes.string,
  buttons: PropTypes.any
  // breadcrumbItems: PropTypes.any.isRequired
};

Navbar.defaultProps = {
  backTitle: '',
  backHref: '',
  pageTitle: '',
  buttons: ''
};

export default Navbar;
