import PropTypes from 'prop-types';

import { getFieldOption } from '../../utils/field';

const ComponentForField = props => {
  const { project, field, children } = props;

  switch (field.input_type) {
    case 'image': {
      return (
        <>
          <img className="image" src={children} />
          <style jsx>
            {`
              .image {
                max-width: 50px;
                max-width: 50px;
              }
            `}
          </style>
        </>
      );
    }
    case 'select': {
      const option = getFieldOption(project, field, children);
      return option?.value || '';
    }
    default:
      return <>{children}</>;
  }
};

ComponentForField.propTypes = {
  project: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  children: PropTypes.any
};

ComponentForField.defaultProps = {
  children: ''
};

export default ComponentForField;
