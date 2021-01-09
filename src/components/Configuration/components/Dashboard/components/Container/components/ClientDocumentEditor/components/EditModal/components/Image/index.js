import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../../../../OpenableImage';
import Spinner from '../../../../../../../../../../../Spinner';
import { uploadImage } from '../../../../../../../../../../../../services/cloudinary/image';

import { getLanguage } from './lang';

const Text = props => {
  const { field, value } = props;
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const [uploading, setUploading] = useState(false);
  const input = useRef(null);

  const handleOpenFileSelector = () => {
    input.current.click();
  };

  const handleChangeImage = e => {
    const [file] = e.target.files;

    if (!file) return;

    setUploading(true);

    uploadImage(user, file).then(body => {
      setUploading(false);
      props.onChange(body.secure_url);
    });
  };

  return (
    <>
      {`${field.name}:`}
      {uploading ? <Spinner /> : <OpenableImage src={value} title={field.name} style={{ width: '20%' }} />}
      <Button size="small" onClick={handleOpenFileSelector}>
        {language.selectImage}
      </Button>
      <input ref={input} type="file" style={{ display: 'none' }} onChange={handleChangeImage} />
    </>
  );
};

Text.propTypes = {
  value: PropTypes.any.isRequired,
  field: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    input_type: PropTypes.string.isRequired,
    is_required: PropTypes.bool.isRequired
  }).isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  onChange: () => {}
};

export default Text;
