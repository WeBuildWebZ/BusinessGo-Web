import PropTypes from 'prop-types';

import Rectangle from '../../../../components/Rectangle';

const PageDemo = props => (
  <div className="pageDemo">
    <div className="box">
      <iframe title="title" src={props.pageUrl} className="iframe" />
    </div>
    <style jsx>
      {`
        .pageDemo {
          flex: 3;
          width: 100%;
          height: 100%;
          background: #ebebeb;
          border-radius: 5px;
          overflow: visible;
        }
        .box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          border-radius: 10px;
          overflow: visible;
        }
        .iframe {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      `}
    </style>
  </div>
);

PageDemo.propTypes = {
  pageUrl: PropTypes.string.isRequired
};

export default PageDemo;
