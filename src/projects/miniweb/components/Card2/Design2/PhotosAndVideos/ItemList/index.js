import { useSelector } from 'react-redux';

import { isImageFromName, isVideoFromName } from '../../../../../../../utils/files';

import Video from './Video';

const ItemList = props => {
  const card = useSelector(store => store.card);

  return (
    <div className="itemList">
      {card.photos_or_videos.map((item, i) => {
        const url = item.photo_or_video;
        const isVideo = isVideoFromName(url);
        const isImage = isImageFromName(url);

        if (!isImage && !isVideo) return;

        const component = isImage ? <img className="image" src={url} /> : isVideo ? <Video url={url} /> : '';

        return (
          <div key={i} className="imageVideoContainer">
            {component}
            <b>{item.title}</b>
            <div>{item.price}</div>
          </div>
        );
      })}
      <style jsx>
        {`
          .itemList {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            padding-top: 25px;
            background-color: ${card.border_color};
            background-image: url(${window.getAssetUrl('miniweb_assets/design2/background.svg')});
            background-size: contain;
          }
          .image {
            width: 100px;
            margin: 4px;
            border-radius: 20px;
          }
          .imageVideoContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default ItemList;
