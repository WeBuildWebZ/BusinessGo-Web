import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const PhotosAndVideos = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="header">
      <img src={window.getAssetUrl('miniweb_assets/design2/big_play_button.png')} />
      <h1>{language.photosAndVideos}</h1>
      <style jsx>
        {`
          .header {
            display: flex;
            margin-top: 28px;
            color: #000000;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #ffffff;
          }
        `}
      </style>
    </div>
  );
};

export default PhotosAndVideos;
