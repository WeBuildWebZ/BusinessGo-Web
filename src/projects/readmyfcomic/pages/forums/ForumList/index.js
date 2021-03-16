import { useSelector } from 'react-redux';
import Link from 'next/link';

const ForumList = () => {
  const forums = useSelector(store => store.forums);

  return (
    <div className="forumList">
      {forums?.map((forum, i) => {
        const link = `/forums/${encodeURIComponent(forum._id)}`;

        return (
          <div key={i} className="profile">
            <Link href={link}>
              <a>
                <img className="image" src={forum.user.image} />
                <div className="questionContainer">{forum.question}</div>
              </a>
            </Link>
            <div className="infoContainer">
              <div className="statistic viewsContainer">
                <img className="icon" src="/icons/eye.png" alt="eye" />
                <div className="views">{forum.views_count}</div>
              </div>
              <div className="statistic commentsContainer">
                <img className="icon" src="/icons/comment_bubble.png" alt="comment bubble" />
                <div className="stars">{forum.comments_count}</div>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>
        {`
          .forumList {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 14px;
          }
          .column {
            flex: 50%;
          }
          .profile {
            display: flex;
            flex-direction: row;
            width: fit-content;
            margin: 28px 0 14px 0;
            user-select: none;
            transition: 0.7s;
          }
          .profile:hover {
            transform: scale(1.03);
          }
          .profile:active {
            transform: scale(1.08);
            transition: 0.1s;
          }
          .image {
            max-width: 180px;
            max-height: 150px;
            border-radius: 5px;
          }
          .questionContainer {
            flex: 5;
          }
          .infoContainer {
            max-width: 200px;
            margin-left: 7px;
          }
          .name {
            font-size: 24px;
          }
          .icon {
            display: inline-block;
            width: 20px;
          }
          .statistic {
            transition: 0.7s;
            cursor: pointer;
          }
          .statistic:hover {
            transform: scale(1.2);
          }
          .statistic:active {
            transform: scale(1.5) rotate(-5deg);
            transition: 0.1s;
          }
          .viewsContainer {
            display: flex;
            flex-direction: row;
          }
          .views {
            display: inline-block;
            margin-left: 7px;
          }
          .commentsContainer {
            display: flex;
            flex-direction: row;
          }
          .stars {
            display: inline-block;
            margin-left: 7px;
          }
          @media only screen and (max-width: 768px) {
            .profileList {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ForumList;
