import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Avatar = props => {
  const project = useSelector(store => store.project);
  const image = project.chatbot.configuration.web.avatar;

  return (
    <div className="avatar" onClick={props.onClick}>
      {image && <img className="image" src={image} />}
      <style jsx>
        {`
          .avatar {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px);
            top: calc(100% - 23px);
            width: 80px;
            height: 80px;
            ${props.show
              ? ''
              : `
                opacity: 0;
                width: 0;
                height: 0;
            `}
            cursor: pointer;
            transition: 0.7s;
            z-index: 999;
          }
          .avatar:hover {
            transform: translate(-100%, -100%) rotate(5deg);
          }
          .image {
            max-width: 100%;
            max-height: 100%;
          }
        `}
      </style>
    </div>
  );
};

Avatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Avatar;
