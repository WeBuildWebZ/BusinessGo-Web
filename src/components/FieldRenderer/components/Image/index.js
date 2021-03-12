import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../Spinner';
import { uploadImage } from '../../../../services/cloudinary/image';
import OpenableImage from '../../../OpenableImage';
import { getFieldKeyTranslation } from '../../../../translations/fieldKeys';
import { fieldShape } from '../../../../utils/field';

const Image = props => {
  const { field, value } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const project = useSelector(store => store.project);
  const [uploading, setUploading] = useState(false);
  const input = useRef(null);
  const fieldName = field.name || keyTranslation[field.key];

  const handleOpenFileSelector = () => {
    input.current.click();
  };

  const handleChangeImage = e => {
    const [file] = e.target.files;

    if (!file) return;

    setUploading(true);

    uploadImage(project, file).then(body => {
      setUploading(false);
      props.onChange(body.secure_url);
    });
  };

  return (
    <div className="imageContainer">
      <div className="imageText">{`${fieldName}:`}</div>
      {uploading ? (
        <Spinner />
      ) : props.readOnly ? (
        <OpenableImage src={value || field.default_value} title={fieldName} />
      ) : (
        <img
          alt={fieldName}
          src={value || field.default_value || '/shared/icons/upload.svg'}
          className="image"
          onClick={handleOpenFileSelector}
        />
      )}
      <input ref={input} type="file" style={{ display: 'none' }} onChange={handleChangeImage} />
      <style jsx>
        {`
          .imageContainer {
            margin: 16px 0 16px 0;
          }
          .imageText {
            width: fit-content;
            display: inline-block;
          }
          .image {
            display: inline-block;
            width: 50px;
            margin-left: 10px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

Image.propTypes = {
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Image.defaultProps = {
  value: '',
  readOnly: false,
  onChange: () => {}
};

export default Image;
