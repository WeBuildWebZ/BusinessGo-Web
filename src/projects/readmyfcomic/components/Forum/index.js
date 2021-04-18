import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Title from '../Title';

import Description from './Description';
import Buttons from './Buttons';
import NewComment from './NewComment';

const Forum = props => {
  const { forum } = props;
  const languageCode = useSelector(store => store.language);

  return (
    <div className="forum">
      <div className="topBarContainer">
        <Link href={`/profiles/${encodeURIComponent(forum.user._id)}`}>
          <a target="blank">
            <div className="profile">
              <img className="profilePhoto" src={forum.user.image} />
              {forum.user.name}
            </div>
          </a>
        </Link>
        <div className="titleContainer">
          <Title title={forum.title} />
          <div className="date">
            {Intl.DateTimeFormat(languageCode, { dateStyle: 'full', timeStyle: 'long' }).format(
              new Date(forum.createdAt)
            )}
          </div>
        </div>
      </div>
      <Description forum={forum} />
      <Buttons />
      <NewComment />

      <style jsx>
        {`
          .forum {
          }
          .topBarContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .profilePhoto {
            max-width: 100px;
            max-height: 100px;
            margin-right: 14px;
            transition: 0.7s;
          }
          .profilePhoto:hover {
            transform: scale(1.1);
          }
          .profilePhoto:active {
            transform: scale(1.2) rotate(5deg);
            transition: 0.1s;
          }
          .titleContainer {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .date {
            margin-top: -32px;
            font-size: 15px;
          }
          @media only screen and (max-width: 768px) {
            .topBarContainer {
              flex-direction: column;
            }
          .date {
            font-size: 10px;
          }>
          }
        `}
      </style>
    </div>
  );
};

Forum.propTypes = {
  forum: PropTypes.object.isRequired
};

export default Forum;
