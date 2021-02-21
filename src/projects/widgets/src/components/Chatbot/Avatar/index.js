import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const classes = {
  avatar: `avatar-${uuid()}`,
  image: `image-${uuid()}`
};

const Avatar = props => {
  const project = useSelector(store => store.project);
  const image = project.chatbot.configuration.web.avatar;

  return (
    <div className={classes.avatar} onClick={props.onClick}>
      {image && <img className={classes.image} src={image} alt="chatbot_avatar" />}
      <style jsx>
        {`
          .${classes.avatar} {
            overflow: visible;
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
          .${classes.avatar}:hover {
            transform: translate(-100%, -100%) scale(1.1) rotate(5deg);
          }
          .${classes.image} {
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
