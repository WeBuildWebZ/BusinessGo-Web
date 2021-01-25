import PropTypes from 'prop-types';
import Image from 'next/image';

const Logo = props => (
  <>
    <Image
      src="/images/icons/icon.png"
      alt="Logo"
      width={props.width}
      height={props.height}
    />
    {/* lean quite la clase colored y el style jsx..porque no lo usaba */}
  </>
);

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

Logo.defaultProps = {
  width: 150,
  height: 103.125
};

export default Logo;
