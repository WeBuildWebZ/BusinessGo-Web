import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Spinner from '../../../../components/Spinner';
import { showClientDocument } from '../../../../services/api/clientDocument';

import SocialNetworks from './SocialNetworks';

const Card = props => {
  const [card, setCard] = useState(props.card);

  const getClassName = name => `${name} ${card.template_code}`;

  useEffect(() => {
    if (card) return;
    showClientDocument(props.id).then(({ data: givenCard }) => {
      setCard(givenCard);
    });
  }, []);

  if (!card) return <Spinner />;

  const hasName = !!(card.form_data.name || card.form_data.surname);
  const hasJobTitle = !!card.form_data.job_title;

  return (
    <div className={getClassName('_card')}>
      <div className={getClassName('top')}>
        <img className={getClassName('profile_photo')} src={card.form_data.profile_photo} />
        <div className={getClassName('personalData')}>
          {hasName && (
            <div className={getClassName('text name')}>
              {`${card.form_data.name} ${card.form_data.surname}`}
            </div>
          )}
          {hasJobTitle && <div className={getClassName('text job_title')}>{card.form_data.job_title}</div>}
        </div>
        {hasJobTitle && <div className={getClassName('text job_title')}>{card.form_data.job_title}</div>}
      </div>
      <div className="left">
        <div>{card.form_data.country}</div>
        <div>{card.form_data.state}</div>
      </div>
      {hasName && (
        <div className={getClassName('text name')}>
          {card.form_data.name} {card.form_data.surname}
        </div>
      )}
      <SocialNetworks card={card} getClassName={getClassName} />
      <style jsx>
        {`
          ._card {
            background-image: url(${card.form_data.background_image});
            background-size: cover;
            width: 100%;
            height: 100%;
          }
          .text.free4 {
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
          }
          .top {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100px;
            padding-top: 10px;
          }
          .top.free2 {
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .top.free4 {
            background-color: whitesmoke;
            border-bottom-left-radius: 40%;
            border-bottom-right-radius: 40%;
          }
          .profile_photo {
            max-width: 100%;
            height: 80%;
            margin: 0 0 0 14px;
            border-radius: 10px;
          }
          .personalData {
            display: flex;
            flex-direction: column;
            margin: 14px 0 0 14px;
            color: whitesmoke;
          }
          .personalData.free1 {
            display: none;
          }
          .name {
            font-size: 20px;
          }
          .name.free2 {
            font-size: 32px;
          }
          .job_title.free1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 22px;
            padding: 7px;
            border-radius: 10px;
            color: whitesmoke;
            background-color: #03030355;
          }
          .job_title.free2 {
            font-size: 20px;
          }
          .name.free1 {
            position: absolute;
            transform: translate(-50%, -50%) rotate(270deg);
            left: 50%;
            top: 50%;
            width: fit-content;
            padding: 7px;
            border-radius: 7px;
            font-size: 40px;
            color: whitesmoke;
            background-color: #03030355;
          }
          .left {
            margin-left: 14px;
            color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  card: PropTypes.any
};

Card.defaultProps = {
  id: null,
  card: null
};

export default Card;
