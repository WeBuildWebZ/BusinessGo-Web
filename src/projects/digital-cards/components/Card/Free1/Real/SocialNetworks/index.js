import Link from 'next/link';
import PropTypes from 'prop-types';

import * as constants from '../../../constants';

const SocialNetworks = props => {
  const { card } = props;

  const socialNetworks = constants.SOCIAL_NETWORKS.filter(
    socialNetwork => !!card.form_data[socialNetwork.key]
  ).map(socialNetwork => ({ ...socialNetwork, url: card.form_data[socialNetwork.key] }));

  return (
    <div className="socialNetworks">
      {socialNetworks.map(socialNetwork => (
        <Link href={socialNetwork.url}>
          <a target="blank">
            <div className="button" style={{ WebkitMaskImage: `url(${socialNetwork.icon})` }} />
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .socialNetworks {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            position: fixed;
            transform: translate(0, -100%);
            left: 0;
            top: 100%;
            width: 100%;
            height: 60px;
            padding: 10px;
            border-radius: 17px;
            background-color: #030303;
          }
          .button {
            width: 50px;
            height: 50px;
            -webkit-mask-repeat: no-repeat;
            background-image: linear-gradient(to top, rgb(144, 101, 22), orange);
            cursor: pointer;
            transition: 0.7s;
            animation: buttonAppear linear 0.7s;
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
  card: PropTypes.object.isRequired
};

export default SocialNetworks;
