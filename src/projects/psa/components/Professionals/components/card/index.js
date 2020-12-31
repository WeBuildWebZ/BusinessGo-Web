import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Location from './location.svg';
import WorkShopIcon from './workshop.svg';
import PhoneGreen from './phone-green.svg';
import ArrowRight from './arrow-right.svg';

const Card = props => {
  const { professional } = props;

  return (
    <div className="Professionals-Card" onClick={props.onClick}>
      <ArrowRight className="Professionals-Card-arrowRightIcon" />
      <img className="Professionals-Card-image" alt={professional.name} src={professional.photo} />

      <div className="Professionals-Card-dataContainer">
        <div className="Professionals-Card-name">{professional.name}</div>
        <div className="Professionals-Card-workshopName">{professional.workshop_name}</div>
      </div>

      <div className="Professionals-Card-workshopContainer">
        <WorkShopIcon className="Professionals-Card-workshopIcon" />
        <div className="Professionals-Card-workshopText">{professional.work_area}</div>
      </div>

      <div className="Professionals-Card-addressContainer">
        <Location className="Professionals-Card-locationIcon" />
        <div className="Professionals-Card-locationText">
          {professional.address}
          ,&nbsp;
          {professional.city}
        </div>
      </div>

      <div className="Professionals-Card-phoneContainer">
        <PhoneGreen className="Professionals-Card-phoneIcon" />
        <div className="Professionals-Card-phoneText">{professional.phone}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  professional: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

Card.defaultProps = {
  onClick: () => {}
};

export default Card;
