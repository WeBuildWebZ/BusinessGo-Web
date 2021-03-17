import Link from 'next/link';
import PropTypes from 'prop-types';

import * as constants from '../constants';

const SocialNetworks = props => {
  const { card, getClassName } = props;

  const socialNetworks = constants.SOCIAL_NETWORKS.filter(
    socialNetwork => !!card.form_data[socialNetwork.key]
  ).map(socialNetwork => ({ ...socialNetwork, url: card.form_data[socialNetwork.key] }));

  return (
    <div className={getClassName('socialNetworks')}>
      {socialNetworks.map(socialNetwork => (
        <Link href={socialNetwork.url}>
          <a target="blank">
            <div
              className={getClassName('button')}
              style={{ WebkitMaskImage: `url(${socialNetwork.icon})` }}
            />
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .socialNetworks {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            flex: 1;
            border-radius: 17px;
          }

          // =============================================================

          .socialNetworks.free2 {
            background-color: #e0d0d055;
          }
          .socialNetworks.free4 {
            flex-direction: column;
            width: 60px;
            height: 50%;
          }
          .button {
            width: 50px;
            height: 50px;
            -webkit-mask-repeat: no-repeat;
            cursor: pointer;
            transition: 0.7s;
            animation: buttonAppear linear 0.7s;
          }
          .button.free1 {
            background: #28527a;
          }
          .button.free2 {
            background-image: linear-gradient(to right, rgb(43, 39, 33), rgb(0, 0, 0));
            color: white;
          }
          .button.free4 {
            background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
          }
          .button:hover {
            transform: scale(1.1);
          }
          .button:active {
            transform: scale(1.2) rotate(5deg);
            transition: 0.1s;
          }
          @keyframes buttonAppear {
            0% {
              width: 0;
              left: 0;
            }
          }
          @media only screen and (max-width: 768px) {
            .button {
              width: 40px;
              height: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};

SocialNetworks.propTypes = {
  card: PropTypes.object.isRequired,
  getClassName: PropTypes.func.isRequired
};

export default SocialNetworks;
