import PropTypes from 'prop-types';

const Title = props => (
  <div className="title">
    {props.title}
    <style jsx>
      {`
        .title {
          margin: 35px 0 35px 0;
          color: #f72c4e;
          font-size: 36px;
        }
        @media only screen and (max-width: 768px) {
          .title {
            margin: 10px 0 35px 0;
            font-size: 24px;
          }
        }
      `}
    </style>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
