import PropTypes from 'prop-types';

import SocialNetworks from './SocialNetworks';

const Free1 = props => {
  const { card } = props;

  const getClassName = name => `${name} ${card.template_code}`;

  return (
    <div className={getClassName('_card')}>
      <div className={getClassName('top')}>
        <img className={getClassName('profile_photo')} src={card.form_data.profile_photo} />
        <div className={getClassName('personalData')}>
          <div className={getClassName('text name')}>
            {`${card.form_data.name} ${card.form_data.surname}`}
          </div>
          <div className={getClassName('text')}>{card.form_data.job_title}</div>
        </div>
      </div>
      <div className="left">
        <div>{card.form_data.country}</div>
        <div>{card.form_data.state}</div>
      </div>
      <SocialNetworks card={props.card} getClassName={getClassName} />
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
          .name {
            font-size: 20px;
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

Free1.propTypes = {
  card: PropTypes.object.isRequired
};

export default Free1;
