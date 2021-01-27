import PropTypes from 'prop-types';

import Row from './Row';

const Rectangle = props => (
  <div className="rectangle">
    {props.children}
    <style jsx>
      {`
        .rectangle {
          width: 100%;
          height: 100%;
          display: flex;
          overflow: visible;
        }
      `}
    </style>
  </div>
);

Rectangle.propTypes = {
  children: PropTypes.any
};

Rectangle.defaultProps = {
  children: () => <div />
};

Rectangle.Row = Row;

export default Rectangle;
