import Title from './Title';
import LogoutButton from './LogoutButton';

const Navbar = () => (
  <div className="navbar">
    <Title />
    <LogoutButton />
    <style jsx>
      {`
        .navbar {
          display: flex;
          width: 100%;
          height: 50px;
          background-image: linear-gradient(to right, skyblue, rgb(175, 218, 235));
          border-bottom-right-radius: 14px;
        }
      `}
    </style>
  </div>
);

export default Navbar;
