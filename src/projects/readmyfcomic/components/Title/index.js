import PropTypes from 'prop-types';

const Title = props => (
  <>
    <div className="title">{props.title}</div>
    <div className="subtitleContainer">
      {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
    </div>
    <style jsx>
      {`
        .title {
          display: flex;
          justify-content: center;
          margin: 35px 0 7px 0;
          color: #f72c4e;
          font-size: 36px;
        }
        .subtitleContainer {
          display: flex;
          justify-content: center;
        }
        .subtitle {
          color: #030303;
          font-size: 22px;
          text-align: center;
          max-width: 85%;
          white-space: pre-line;
        }
        @media only screen and (max-width: 768px) {
          .title {
            margin: 10px 0 35px 0;
            font-size: 24px;
          }
          .subtitle {
            font-size: 16px;
          }
        }
      `}
    </style>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Title.defaultProps = {
  subtitle: ''
};

export default Title;
