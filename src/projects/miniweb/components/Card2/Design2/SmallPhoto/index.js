import { useSelector } from 'react-redux';

const SmallPhoto = () => {
  const card = useSelector(store => store.card);

  return (
    <div className="smallPhotoContainer">
      <img className="background" src={globalThis.getAssetUrl('miniweb_assets/design2/header.svg')} />
      <div className="smallPhotoHolder">
        <div className="smallPhoto" />
      </div>
      <style jsx>
        {`
          .smallPhotoContainer {
            position: relative;
            transform: translate(0, -50%);
            margin-bottom: -33.33vw;
            margin-bottom: -16.66vw;
            display: flex;
            justify-content: center;
          }
          .background {
            position: absolute;
            left: 0;
            top: -14vw;
            width: 100vw;
            height: 53vw;
          }
          .smallPhotoHolder {
            width: 33.33vw;
            height: 33.33vw;
            background-image: url(${globalThis.getAssetUrl(
              'miniweb_assets/design2/profile_image_holder.png'
            )});
            background-size: cover;
            border-radius: 50%;
            z-index: 2;
          }
          .smallPhoto {
            width: 86%;
            height: 86%;
            margin: 7% 0 0 7%;
            border-radius: 50%;
            background-image: url(${card.primary_photo});
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
};

export default SmallPhoto;
