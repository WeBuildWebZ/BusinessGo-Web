import Link from 'next/link';
import PropTypes from 'prop-types';

const MenuLink = ({ children, href }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>
      {`
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
          transition: 0.2s;
        }
        a:hover {
          color: #ef563c;
        }
      `}
    </style>
  </>
);

MenuLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired
};

export default MenuLink;
