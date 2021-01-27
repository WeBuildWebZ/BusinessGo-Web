import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { showForm } from '../../services/api/form';

import Header from './Header';
import Input from './Input';
import Avatar from './Avatar';
import { shouldRender } from './utils';

const Chatbot = () => {
  const project = useSelector(store => store.project);
  const [isOpen, setIsOpen] = useState(false);
  const render = shouldRender(project);

  if (!render) return <div />;
  return (
    <>
      <Avatar show={!isOpen} onClick={() => setIsOpen(true)} />
      <div className="chatbot">
        <Header onClose={() => setIsOpen(false)} />
        <Input />
      </div>
      <style jsx>
        {`
          .chatbot {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px);
            top: calc(100% - 23px);
            width: 350px;
            height: 480px;
            ${isOpen
              ? ''
              : `
                opacity: 0;
                width: 0;
                height: 0;
            `}
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 7px 30px 1px rgb(190, 179, 179);
            z-index: 999;
            transition: 0.7s;
          }
        `}
      </style>
    </>
  );
};

export default Chatbot;
