import { useSelector } from 'react-redux';

import usePushAlert from '../../../../../shared/hooks/usePushAlert';

import { getLanguage } from './lang';

const NewComment = props => {
  const pushAlert = usePushAlert();
  const language = getLanguage(useSelector(store => store.language));

  const handleAddComment = () => {
    pushAlert({ type: 'info', title: language.commentAdded.title, message: language.commentAdded.message });
  };

  return (
    <div className="newComment">
      <h2 className="title">{language.leaveAComment}</h2>
      <textarea className="commentBox" />
      <div className="button" onClick={handleAddComment}>
        {language.postComment}
      </div>
      <style jsx>
        {`
          .newComment {
            display: flex;
            flex-direction: column;
          }
          .title {
            margin-bottom: 14px;
            color: #f72c4e;
          }
          .commentBox {
            width: 100%;
            height: 250px;
            border-width: 1px;
            border-color: #dcb3e1;
            outline: none;
            transition: 0.1s;
            background-color: #ffcfb599;
          }
          .commentBox:focus {
            border-width: 2px;
            border-color: #b888be;
            border-radius: 5px;
            box-shadow: 0 0 1px 1px #b888be;
            background-color: #ffcfb5;
          }
          .button {
            width: fit-content;
            margin: 7px;
            padding: 7px;
            border-radius: 7px;
            background-color: #b888be;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .button:hover {
            transform: scale(1.1);
          }
          .button:active {
            transform: scale(1.2) rotate(5deg);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

export default NewComment;
