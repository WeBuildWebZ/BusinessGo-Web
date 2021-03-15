import { useSelector } from 'react-redux';
import Link from 'next/link';

const ComicList = () => {
  const comics = useSelector(store => store.comics);

  console.log('comics', comics);

  return (
    <div className="comicList">
      {comics?.map((comic, i) => (
        <Link href={`/comics/${encodeURIComponent(comic._id)}`}>
          <a>
            <div key={i} className="comic">
              <img className="image" src={comic.image} />
              <div className="infoContainer">
                <div className="title">{comic.title}</div>
                <div className="description">{comic.description}</div>
              </div>
              <div className="statiscsContainer">
                <div className="viewsContainer">
                  <img className="icon" src="/icons/eye.png" />
                  <div className="views">{comic.views.length}</div>
                </div>
                <div className="reactionsContainer">
                  <img className="icon" src="/icons/heart.png" />
                  <div className="reactions">{comic.reactions.length}</div>
                </div>
              </div>
            </div>
          </a>
        </Link>
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
            width: 100%;
            margin-bottom: 14px;
            user-select: none;
            cursor: pointer;
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
          .statiscsContainer {
            display: flex;
            flex-direction: column;
          }
          .icon {
            display: inline-block;
            width: 20px;
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
