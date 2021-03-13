import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TooltipComponent = props => {
  if (!props.text) return props.children;

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 120, hide: 120 }}
      overlay={
        <Tooltip
          {...props}
          style={{
            backgroundColor: '#ebebeb',
            padding: 8,
            borderRadius: 5,
            zIndex: 1,
            fontWeight: 'bold'
          }}
        >
          {props.text}
        </Tooltip>
      }
    >
      {props.children}
    </OverlayTrigger>
  );
};

TooltipComponent.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any.isRequired
};

TooltipComponent.defaultProps = {
  text: ''
};

export default TooltipComponent;
