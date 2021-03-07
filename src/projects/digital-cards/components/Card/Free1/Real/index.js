import PropTypes from 'prop-types';

import SocialNetworks from './SocialNetworks';

const Free1 = props => {
  const { card } = props;

  return (
    <div className="_card">
      <div className="top">
        <img className="photo" src={card.form_data.photo} />
        <div className="personalData">
          <div className="name">{`${card.form_data.name} ${card.form_data.surname}`}</div>
          <div>{card.form_data.country}</div>
          <div>{card.form_data.state}</div>
        </div>
      </div>
      <SocialNetworks card={props.card} />
      <style jsx>
        {`
          ._card {
            background-image: url(${card.form_data.background_image});
            background-size: cover;
            width: 100%;
            height: 100%;
          }
          .top {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100px;
          }
          .photo {
            max-width: 100%;
            height: 100%;
            margin: 14px 0 0 14px;
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
        `}
      </style>
    </div>
  );
};

Free1.propTypes = {
  card: PropTypes.object.isRequired
};

export default Free1;
