import { useSelector } from 'react-redux';

const CoverPhoto = () => {
  const card = useSelector(store => store.card);

  return (
    <>
      <div className="coverPhoto" />
      <style jsx>
        {`
          .coverPhoto {
            width: 100vw;
            height: 38.8vh;
            background-image: url(${card.cover_photo});
            background-size: cover;
          }
        `}
      </style>
    </>
  );
};

export default CoverPhoto;
