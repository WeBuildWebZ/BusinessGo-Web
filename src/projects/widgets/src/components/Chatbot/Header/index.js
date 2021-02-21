import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import CloseButton from '@material-ui/icons/CancelRounded';
import PropTypes from 'prop-types';

const classes = {
  title: `title-${uuid()}`,
  titleContainer: `titleContainer-${uuid()}`,
};

const Header = props => {
  const project = useSelector(store => store.project);

  return (
    <div className={classes.titleContainer}>
      <div className={classes.title}>{props.title}</div>
      <CloseButton
        onClick={props.onClose}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          left: 'calc(100% - 7px)',
          transform: 'translate(-100%)'
        }}
      />
      <style jsx>
        {`
          .${classes.titleContainer} {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: ${project.chatbot.configuration.web.header_size || 50}px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: linear-gradient(to right, rgb(152, 130, 187), rgb(110, 72, 170));
            transition: 0.7s;
          }
          .${classes.titleContainer}:hover {
            background: linear-gradient(to right, rgb(169, 155, 192), rgb(110, 72, 170));
          }
          .${classes.title} {
            text-align: center;
            color: whitesmoke;
            text-shadow: 1px 1px 2px whitesmoke;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

Header.defaultProps = {
  title: ''
};

export default Header;
