import PropTypes from 'prop-types';

import Left from './left';
import Mid from './mid';

const Banner = props => (
  <div className={`banner${props.show ? '' : ' bannerClosed'}`}>
    <Left onClickSee={props.onClose} banner={props.banner} />
    <Mid />
    {props.show && props.banner.Right}

    <style jsx>
      {`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          padding: 2em 5em;
          transition: 0.5s;
        }
        .bannerClosed {
          opacity: 0;
          width: 0;
          height: 0;
          padding: 0;
          border-width: 0;
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
