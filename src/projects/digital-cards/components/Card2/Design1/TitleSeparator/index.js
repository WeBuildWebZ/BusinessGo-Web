import PropTypes from 'prop-types';

import * as constants from '../../constants';

const TitleSeparator = props => (
  <div className="titleSeparator" style={{ backgroundColor: props.color }}>
    {props.title}
    <style jsx>
      {`
        * {
          color: whitesmoke;
        }
        .titleSeparator {
          display: flex;
          transform: translate(-${constants.sideMargin}px);
          justify-content: center;
          align-items: center;
          width: calc(100% + ${constants.sideMargin * 2}px);
          height: 100px;
          margin: 100px 0 100px 0;
          font-size: 24px;
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 14px;
        }
      `}
    </style>
  </div>
);

TitleSeparator.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string.isRequired
};

TitleSeparator.defaultProps = {
  title: ''
};

export default TitleSeparator;
