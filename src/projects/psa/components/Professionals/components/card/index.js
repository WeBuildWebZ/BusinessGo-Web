import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { professional } = props;

  return (
    <div className="Professionals-Card" onClick={props.onClick}>
      <img className="Professionals-Card-arrowRightIcon" src="icons/arrow-right.svg" alt="arrowRight" />
      <img className="Professionals-Card-image" alt={professional.name} src={professional.photo} />

      <div className="Professionals-Card-dataContainer">
        <div className="Professionals-Card-name">{professional.name}</div>
        <div className="Professionals-Card-workshopName">{professional.workshop_name}</div>
      </div>

      <div className="Professionals-Card-workshopContainer">
        <img className="Professionals-Card-workshopIcon" src="icons/workshop.svg" alt="workshopIcon" />
        {/* <WorkShopIcon className="Professionals-Card-workshopIcon" /> */}
        <div className="Professionals-Card-workshopText">{professional.work_area}</div>
      </div>

      <div className="Professionals-Card-addressContainer">
        <img className="Professionals-Card-locationIcon" src="icons/location.svg" alt="locationIcon" />
        <div className="Professionals-Card-locationText">
          {professional.address}
          ,&nbsp;
          {professional.city}
        </div>
      </div>

      <div className="Professionals-Card-phoneContainer">
        <img className="Professionals-Card-phoneIcon" src="icons/phone-green.svg" alt="phoneGreenIcon" />
        <div className="Professionals-Card-phoneText">{professional.phone}</div>
      </div>
      <style jsx>
        {`
          .Professionals-Card {
            display: inline-block;
            background-color: #32363d;
            width: 378px;
            height: 173px;
            border-radius: 5px;
            margin: 31px 0 0 31px;
            cursor: pointer;
            transition: 0.2s;
          }

          .Professionals-Card:hover {
            box-shadow: 0 0 2px 2px #32363d;
          }

          .Professionals-Card-image {
            float: left;
            margin: 16px 0 0 16px;
            width: 53px;
            height: 53px;
          }

          .Professionals-Card-dataContainer {
            float: left;
            margin: 18px 0 0 14px;
          }

          .Professionals-Card-name {
            width: 100%;
            font-size: 18px;
            color: #ffffff;
          }

          .Professionals-Card-workshopName {
            width: fit-content;
            font-size: 16px;
            color: #cccdce;
          }

          .Professionals-Card-workshopContainer {
            display: inline-block;
            position: relative;
            margin-top: 10px;
            width: 100%;
          }

          .Professionals-Card-workshopIcon {
            float: left;
            width: 22px;
            margin-left: 14px;
          }

          .Professionals-Card-workshopText {
            float: left;
            margin-left: 10px;
            font-size: 16px;
            color: #cccdce;
          }

          .Professionals-Card-addressContainer {
            display: inline-block;
            position: relative;
            width: 100%;
          }

          .Professionals-Card-locationIcon {
            float: left;
            margin-left: 16px;
          }

          .Professionals-Card-locationText {
            float: left;
            margin-left: 13px;
            font-size: 16px;
            color: #cccdce;
          }

          .Professionals-Card-phoneContainer {
            display: inline-block;
            position: relative;
            width: 100%;
          }

          .Professionals-Card-phoneIcon {
            float: left;
            margin-left: 16px;
          }

          .Professionals-Card-phoneText {
            float: left;
            margin-left: 8px;
            font-size: 16px;
            color: #0cc44a;
          }

          .Professionals-Card-arrowRightIcon {
            float: right;
            margin: 36px 24px 0 0;
          }

          @media only screen and (max-width: 768px) {
            .Professionals-Card {
              width: 88%;
              margin-left: 5.5%;
            }
          }
        `}
      </style>
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
