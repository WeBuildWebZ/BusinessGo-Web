import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Header from '../Header';
import * as constants from '../constants';

const FAQ = props => {
  const [show, setShow] = useState(true);
  const showButton = props.show && !show;
  const project = useSelector(store => store.project);
  const { faq_title } = project.chatbot.configuration.web;

  return (
    <div className={`faqContainer${!props.show || !show ? ' faqContainerHidden' : ''}`}>
      <Header title={faq_title} onClose={props.onClose} />
      <div className="faqList">
        {project.chatbot.configuration.web.faq?.map((faq, i) => (
          <div key={i} className="faqItem" onClick={() => props.onQuestion(faq)}>
            {faq}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .faqContainer {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px - ${constants.WIDTH}px - 5px);
            top: calc(100% - 23px);
            width: ${constants.WIDTH}px;
            height: ${constants.HEIGHT}px;
            z-index: 1000;
            transition: 0.7s;
            overflow-x: visible;
          }
          .faqContainerHidden {
            opacity: 0;
            width: 0;
            height: 0;
          }
          .faqList {
            width: 100%;
            height: calc(100% - ${project.chatbot.configuration.web.header_size || 50}px);
            background-color: whitesmoke;
            overflow-x: visible;
          }
          .faqItem {
            width: 100%;
            height: 40px;
            padding-top: 10px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .faqItem:hover {
            transform: scale(1.1);
            background-color: lightskyblue;
            box-shadow: 0 5px 15px lightskyblue;
            z-index: 2;
            border-radius: 7px;
          }
        `}
      </style>
    </div>
  );
};

FAQ.propTypes = {
  show: PropTypes.bool.isRequired,
  onQuestion: PropTypes.func,
  onClose: PropTypes.func
};

FAQ.defaultProps = {
  onQuestion: () => {},
  onClose: () => {}
};

export default FAQ;
