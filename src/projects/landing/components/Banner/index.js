import PropTypes from 'prop-types';

import Left from './left';

const Banner = props => (
  <div className={`banner${props.show ? '' : ' '}`}>
    <Left onClickSee={props.onClose} banner={props.banner} />
    {props.show && props.banner.Right}

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em;
          transition: 0.5s;
          background:yellow;
        }
        .bannerClosed {
          opacity: 0;
          width: 0;
          height: 0;
          padding: 0;
          border-width: 0;
          display:none;
        }
        @media (max-width: 1286px) {
          .banner {
            flex-flow: column;
            height: 100%;
          }
        }
      `}
    </style>
  </div>
);

Banner.propTypes = {
  banner: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};

Banner.defaultProps = {
  onClose: () => {}
};

export default Banner;
