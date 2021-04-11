import PropTypes from 'prop-types';

const Description = props => {
  const { forum } = props;

  return (
    <div className="description">
      {forum.description}
      <style jsx>
        {`
          .description {
            margin: 14px;
            padding: 14px;
            color: #030303;
            background-color: #ffcfb5;
            border-radius: 14px;
          }
        `}
      </style>
    </div>
  );
};

Description.propTypes = {
  forum: PropTypes.object.isRequired
};

export default Description;
