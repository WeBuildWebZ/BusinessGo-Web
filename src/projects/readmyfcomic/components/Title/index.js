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
      `}
    </style>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
