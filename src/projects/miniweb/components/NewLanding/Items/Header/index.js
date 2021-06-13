import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    <span className="number">{props.number}</span>
    <div className="title">
      <span className="title1">{props.title1}</span>
      <br />
      <span className="title2">{props.title2}</span>
    </div>
    <style jsx>
      {`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .number {
          font-weight: bolder;
          font-size: 90px;
          color: #ff045c;
        }
        .title {
          margin-left: 15px;
          line-height: 25px;
        }
        .title1 {
          color: #787494;
          font-size: 30px;
        }
        .title2 {
          color: #281c5c;
          font-size: 30px;
          font-weight: bold;
        }
      `}
    </style>
  </div>
);

Header.propTypes = {
  number: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired
};

export default Header;
