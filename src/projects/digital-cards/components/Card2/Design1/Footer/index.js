import Link from 'next/link';
import { useRouter } from 'next/router';

import { cardPropTypes } from '../../constants';

const buttons = [
  { icon: '/miniweb_assets/icons/home.png', elementId: 'home' },
  { icon: '/miniweb_assets/icons/tag.png', elementId: 'tags' },
  { icon: '/miniweb_assets/icons/file.png', elementId: 'files' },
  { icon: '/miniweb_assets/icons/agenda.png', elementId: 'agenda' },
  { icon: '/miniweb_assets/icons/share.png', elementId: 'share' }
];

const Footer = props => {
  const { card } = props;
  const router = useRouter();

  return (
    <div
      className="footer"
      style={{ backgroundColor: card.border_color, boxShadow: `0 0 2px 2px ${card.border_color}` }}
    >
      {buttons.map((button, i) => (
        <Link key={i} href={`${window.location.pathname}#${button.elementId}`}>
          <a>
            <img className="icon" src={button.icon} />
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .footer {
            position: fixed;
            transform: translate(0, -100%);
            left: 0;
            top: 100%;
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
          }
          .icon {
            width: 40px;
            transition: 0.7s;
          }
          .icon:hover {
            transform: scale(1.08);
          }
          .icon:active {
            transform: scale(1.15);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

Footer.propTypes = cardPropTypes;

export default Footer;
