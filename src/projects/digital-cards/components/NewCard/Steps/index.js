import PropTypes from 'prop-types';

import Step1 from './Step1';

const Steps = props => {
  switch (props.step) {
    case 1: {
      return <Step1 onDataAdded={props.onDataAdded} />;
    }
    default: {
      throw new Error(`Wrong step ${props.step}`);
    }
  }
};

Steps.propTypes = {
  step: PropTypes.number.isRequired,
  onDataAdded: PropTypes.func.isRequired
};

export default Steps;
