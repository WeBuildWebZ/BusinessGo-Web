import { useSelector } from 'react-redux';

import Title from './Title';
import Input from './Input';
import { shouldRender } from './utils';

const Chatbot = () => {
  const project = useSelector(store => store.project);

  if (!shouldRender(project)) return <div />;

  return (
    <div className="chatbot">
      <Title />
      <Input />
      <style jsx>
        {`
          .chatbot {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px);
            top: calc(100% - 23px);
            width: 350px;
            height: 480px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 7px 30px 1px rgb(190, 179, 179);
            z-index: 999;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
