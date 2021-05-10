import { useSelector } from 'react-redux';
import Link from 'next/link';

const ComicList = () => {
  const comics = useSelector(store => store.comics);

  return (
    <div className="comicList">
      {comics?.map((comic, i) => (
        <div key={i} className="comic">
          <Link href={`/comics/${encodeURIComponent(comic._id)}`}>
            <a>
              <img className="image" src={comic.image} />
            </a>
          </Link>
          <Link href={`/comics/${encodeURIComponent(comic._id)}`}>
            <a>
              <div className="infoContainer">
                <div className="title">{comic.title}</div>
                <div className="description">{comic.description}</div>
              </div>
            </a>
          </Link>
          <div className="statisticContainer">
            <div className="statistic viewsContainer">
              <img className="icon" src="/icons/eye.png" />
              <div className="views">{comic.views_count}</div>
            </div>
            <div className="statistic reactionsContainer">
              <img className="icon" src="/icons/heart.png" />
              <div className="reactions">{comic.reactions.length}</div>
            </div>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .comicList {
            width: 100%;
            margin-top: 14px;
          }
          .comic {
            display: flex;
            flex-direction: row;
            width: fit-content;
            margin-bottom: 14px;
            user-select: none;
            transition: 0.7s;
          }
          .comic:hover {
            transform: scale(1.03);
          }
          .comic:active {
            transform: scale(1.08);
            transition: 0.1s;
          }
          .image {
            max-width: 180px;
            max-height: 150px;
            border-radius: 5px;
          }
          .infoContainer {
            max-width: 200px;
            margin-left: 7px;
          }
          .title {
            font-size: 24px;
          }
          .statisticContainer {
            display: flex;
            flex-direction: column;
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
          .reactionsContainer {
            display: flex;
            flex-direction: row;
          }
          .reactions {
            display: inline-block;
            margin-left: 7px;
          }
        `}
      </style>
    </div>
  );
};

export default ComicList;
