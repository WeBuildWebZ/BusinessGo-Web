import React from 'react';
import PropTypes from 'prop-types';

import Back from '../../../Back';

import Profile from './components/profile';
import College from './components/college';
import WorkArea from './components/workArea';
import Address from './components/address';
import Email from './components/email';
import Phone from './components/phone';
import Facebook from './components/facebook';
import Instagram from './components/instagram';
import EmailButton from './components/emailButton';

const Content = props => {
  const { professional } = props;

  return (
    <>
      <Back onClick={props.onClose} />
      <Profile professional={professional} />
      <div className="ProfessionalDetail-Content-dataContainer">
        <College professional={professional} />
        <WorkArea professional={professional} />
        <Address professional={professional} />
        <Email professional={professional} />
        <Phone professional={professional} />
        <Facebook professional={professional} />
        <Instagram professional={professional} />
        <EmailButton professional={professional} />
      </div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-dataContainer {
            margin: 18px 0 0 33px;
          }
        `}
      </style>
    </>
  );
};

Content.propTypes = {
  professional: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

Content.defaultProps = {
  onClose: () => {}
};

export default Content;
