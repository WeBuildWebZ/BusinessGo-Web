import Link from 'next/link';

import { cardPropTypes } from '../../constants';

const MainData = props => {
  const { card } = props;
  const name = card.business_or_company || card.completeName;

  return (
    <div className="mainData">
      <div className="dataContainer">
        {card.primary_photo && (
          <div className="logoContainer">
            <div className="primaryPhoto" style={{ backgroundImage: `url(${card.primary_photo})` }} />
            {card.secondary_photo && (
              <div className="secondaryPhoto" style={{ backgroundImage: `url(${card.secondary_photo})` }} />
            )}
          </div>
        )}
        <div className="name">{name}</div>
        <div className="jobTitle">{card.job_title}</div>
        {card.website_url && (
          <Link href={card.website_url}>
            <a className="websiteUrl" target="blank">
              <div>{card.website_url}</div>
            </a>
          </Link>
        )}
      </div>
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .mainData {
            display: flex;
            flex-direction: row;
            justify-content: center;
            z-index: 1;
          }
          .dataContainer {
            display: flex;
            flex-direction: column;
          }
          .logoContainer {
            width: 100%;
            transform: translate(0, -60px);
            margin-bottom: -60px;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .primaryPhoto {
            width: 50vw;
            height: 50vw;
            background-size: cover;
            border-radius: 50%;
            border-style: solid;
            border-width: 7px;
            border-color: whitesmoke;
            animation: logoAppear 1.5s ease;
          }
          .secondaryPhoto {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 42.6vw;
            top: 42.6vw;
            width: 15vw;
            height: 15vw;
            background-size: cover;
            animation: logoAppear 1.5s ease;
          }
          .name {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            margin-top: 4px;
            text-align: center;
          }
          .jobTitle {
            text-align: center;
          }
          .websiteUrl {
            font-weight: bold;
            text-align: center;
          }
          @keyframes logoAppear {
            0% {
              transform: scale(0) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

MainData.propTypes = cardPropTypes;

export default MainData;
