import React from 'react';
import PropTypes from 'prop-types';

import Back from '../../../Back';

import Profile from './components/profile';
import College from './components/college';
import WorkArea from './components/workArea';
import Address from './components/address';
import Region from './components/region';
import Email from './components/email';
import Phone from './components/phone';
import Facebook from './components/facebook';
import Whatsapp from './components/whatsapp';
import Instagram from './components/instagram';
import EmailButton from './components/emailButton';
import PatentPhoto from './components/patentPhoto';
import SIIPhoto from './components/SIIPhoto';

const Content = props => {
  const { professional } = props;

  return (
    <>
      <Back onClick={props.onClose} style={{ margin: '37px 0 0 36px' }} />
      <Profile professional={professional} />
      <College professional={professional} />
      <WorkArea professional={professional} />
      <Address professional={professional} />
      <Region professional={professional} />
      <Email professional={professional} />
      <Phone professional={professional} />
      <Whatsapp professional={professional} />
      <Facebook professional={professional} />
      <Instagram professional={professional} />
      <PatentPhoto professional={professional} />
      <SIIPhoto professional={professional} />
      <EmailButton professional={professional} />
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
