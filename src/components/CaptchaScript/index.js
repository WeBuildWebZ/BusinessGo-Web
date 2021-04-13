import Head from 'next/head';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const captchaKey = `6LcVl6caAAAAAGUT${'oo3Ajh7UcJ9rzJ3Y-HZ5Bs7P'}`;

const CaptchaScript = props => {
  if (typeof window === 'object')
    window.loadReCaptcha = () => {
      props.onLoad();
    };
  else return <div />;

  return (
    <Head>
      <script
        src={`https://www.google.com/recaptcha/api.js?onload=loadReCaptcha&render=${captchaKey}`}
        async
        defer
      />
    </Head>
  );
};

CaptchaScript.propTypes = {
  onLoad: PropTypes.func
};

CaptchaScript.defaultProps = {
  onLoad: () => {}
};

export default CaptchaScript;
