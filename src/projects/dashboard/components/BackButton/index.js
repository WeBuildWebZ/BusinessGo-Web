import Link from 'next/link';
import PropTypes from 'prop-types';

const BackButton = props => (
  <>
    <Link href={props.href}>
      <a>
        <i className="backButton fa fa-arrow-left" />
      </a>
    </Link>
    <style jsx>
      {`
        .backButton {
          margin: 14px;
          padding: 7px;
          display: inline-block;
          background-color: #3b5998;
          color: whitesmoke;
          border-radius: 50px;
          font-size: 24px;
          user-select: none;
          transition: 0.7s;
        }
        .backButton:hover {
          transform: scale(1.2);
          box-shadow: 0 0 1px 1px #3b5998;
        }
        .backButton:active {
          transform: scale(1.4);
          transition: 0.1s;
        }
      `}
    </style>
  </>
);

BackButton.propTypes = {
  href: PropTypes.string.isRequired
};

export default BackButton;
