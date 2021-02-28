import { useDispatch } from 'react-redux';

import { setNavbarHeight } from '../../../../../shared/actions/navbarHeight';

import Title from './Title';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const dispatch = useDispatch();
  const navbarHeight = 50;

  dispatch(setNavbarHeight(navbarHeight));

  return (
    <div className="navbar">
      <Title />
      <LogoutButton />
      <style jsx>
        {`
          .navbar {
            display: flex;
            width: 100%;
            height: ${navbarHeight}px;
            background-image: linear-gradient(to right, skyblue, rgb(175, 218, 235));
            border-bottom-right-radius: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
