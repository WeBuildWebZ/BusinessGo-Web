import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';

const Footer = props => {
  const { card } = props;

  return (
    <div className="footer">
      <img className="image" alt="info" src={window.getAssetUrl('miniweb_assets/design2/footer/info.png')} />
      <img
        className="image"
        alt="images"
        src={window.getAssetUrl('miniweb_assets/design2/footer/images.png')}
      />
      <img
        className="image"
        alt="files"
        src={window.getAssetUrl('miniweb_assets/design2/footer/files.png')}
      />
      <img
        className="image"
        alt="agenda"
        src={window.getAssetUrl('miniweb_assets/design2/footer/agenda.png')}
      />
      <img
        className="image"
        alt="share"
        src={window.getAssetUrl('miniweb_assets/design2/footer/share.png')}
      />
      <style jsx>
        {`
          .footer {
            position: fixed;
            display: flex;
            justify-content: space-around;
            align-items: center;
            left: 0;
            top: 100vh;
            transform: translate(0, -100%);
            width: 100vw;
            height: 50px;
            background-image: linear-gradient(to top, #080404, #080404 50%, #08040489 100%);
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
          }
          .image {
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </div>
  );
};

Footer.propTypes = cardPropTypes;

export default Footer;
