import { useSelector } from 'react-redux';
import { FileIcon } from 'react-file-icon';
import Link from 'next/link';
import Image from 'next/image';

import { isVideoFromName, isImageFromName } from '../../../../../../utils/files';
import * as constants from '../../constants';
import { getLanguage } from '../../lang';
import TitleSeparator from '../TitleSeparator';

const Documents = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="photosVideos" id="photosVideos">
      <TitleSeparator title={language.photosVideos} color={card.border_color} />
      <div className="photosOrVideos">
        {card.photos_or_videos?.map((photoOrVideo, i) => {
          const url = photoOrVideo.photo_or_video;
          const isVideo = isVideoFromName(url);
          const isImage = isImageFromName(url);

          if (isImage) return <img className="image" key={i} src={url} />;
          if (isVideo)
            return (
              <video className="video" controls="controls" preload="metadata">
                <source src={url} type="video/mp4" />
              </video>
            );
          return undefined;
        })}
      </div>
      <style jsx>
        {`
          .line {
            width: 100%;
            height: 3px;
            border-radius: 7px;
          }
          .document {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 7px;
          }
          .icon {
            min-width: 20px;
            max-width: 20px;
          }
          .downloadLink {
            margin-left: 7px;
          }
          .photosOrVideos {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .image {
            width: 100px;
            margin: 14px;
            border-radius: 14px;
          }
          .video {
            width: 100%;
            margin: 14px;
            margin-left: 0;
            border-radius: 14px;
          }
        `}
      </style>
    </div>
  );
};

Documents.propTypes = constants.cardPropTypes;

export default Documents;
