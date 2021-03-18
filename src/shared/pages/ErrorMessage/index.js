import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const PageDisabled = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      <Modal open>
        <div className="modal">
          <h3 className="title">{language[props.code].title}</h3>
          <p className="message">{language[props.code].message}</p>
        </div>
      </Modal>
      <style jsx>
        {`
          .modal {
            width: 80vw;
            height: 80vh;
            margin: 10vh 0 0 10vw;
            padding-top: 7px;
            background-color: whitesmoke;
            outline: none;
            border-radius: 7px;
            box-shadow: 0 0 2px 2px whitesmoke;
          }
          .title {
            text-align: center;
          }
          .message {
            font-size: 14px;
            padding: 7px;
          }
        `}
      </style>
    </>
  );
};

PageDisabled.propTypes = {
  code: PropTypes.string.isRequired
};

export default PageDisabled;
