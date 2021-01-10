import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../../../../../../../../../Spinner';
import { uploadImage } from '../../../../../../../../../../../../services/cloudinary/image';

import { getLanguage } from './lang';

const Image = props => {
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
      {uploading ? (
        <Spinner />
      ) : (
        <img
          alt={field.name}
          src={value || field.default_value || 'shared/icons/upload.svg'}
          className="image"
          onClick={handleOpenFileSelector}
        />
      )}
      <input ref={input} type="file" style={{ display: 'none' }} onChange={handleChangeImage} />
      <style jsx>
        {`
          .image {
            width: 50px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

Image.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    default_value: PropTypes.string,
    important: PropTypes.bool.isRequired,
    input_type: PropTypes.string.isRequired,
    is_required: PropTypes.bool.isRequired
  }).isRequired,
  onChange: PropTypes.func
};

Image.defaultProps = {
  value: '',
  onChange: () => {}
};

export default Image;
