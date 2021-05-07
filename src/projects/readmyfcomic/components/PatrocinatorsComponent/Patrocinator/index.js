import Link from 'next/link';
import PropTypes from 'prop-types';

const Patrocinator = props => {
  const { patrocinator } = props;

  return (
    <div className="patrocinator">
      <div className="name">{patrocinator.name}</div>
      <Link href={`/profiles/${encodeURIComponent(patrocinator._id)}`}>
        <a target="_blank">
          <img className="image" src={patrocinator.image} />
        </a>
      </Link>
      <div className="comics">
        {patrocinator.sponsorship.comics.map((comic, i) => (
          <Link href={`/comics/${encodeURIComponent(comic._id)}`}>
            <a className="comicImageContainer" target="_blank">
              <img key={i} className="comicImage" src={comic.image} />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          .patrocinator {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 200px;
          }
          .image {
            width: 100%;
            border-radius: 50px;
            transition: 0.7s;
            cursor: pointer;
          }
          .image:hover {
            transform: scale(1.1);
          }
          .image:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
          .name {
            position: absolute;
            transform: translate(-100%);
            left: 100%;
            top: 0;
          }
          .comics {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 14px;
          }
          .comicImageContainer {
          }
          .comicImage {
            max-width: 100%;
            max-height: 70px;
            flex-basis: 0px;
            flex-grow: 1;
            transition: 0.7s;
            cursor: pointer;
            border-radius: 7px;
          }
          .comicImage:hover {
            transform: scale(1.1);
            z-index: 1;
          }
          .comicImage:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

Patrocinator.propTypes = {
  patrocinator: PropTypes.object.isRequired
};

export default Patrocinator;
