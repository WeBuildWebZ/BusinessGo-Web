import { cardPropTypes } from '../../../constants';

const AboutCompany = props => {
  const { card } = props;

  return (
    <div className="aboutCompany">
      <div className="header">
        <div className="circle" />
        <div className="title">{card.business_or_company}</div>
      </div>
      <p className="description">{card.business_description}</p>
      <style jsx>
        {`
          .aboutCompany {
          }
          .header {
            display: flex;
          }
          .title {
            margin-left: 7px;
            font-weight: bold;
            font-size: 20px;
          }
          .circle {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            border-style: solid;
            border-width: 12px;
            border-color: #b0acac;
          }
          .description {
            margin: 12px;
          }
        `}
      </style>
    </div>
  );
};

AboutCompany.propTypes = cardPropTypes;

export default AboutCompany;
