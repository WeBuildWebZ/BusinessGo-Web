import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../Spinner';
import usePushAlert from '../../../../shared/hooks/usePushAlert';
import { uploadFile } from '../../../../services/cloudinary/file';
import OpenableImage from '../../../OpenableImage';
import { getFieldKeyTranslation } from '../../../../translations/fieldKeys';
import { fieldShape } from '../../../../utils/field';
import { isImageFromName, isVideoFromName } from '../../../../utils/files';

import { getLanguage } from './lang';

const Image = props => {
  const { field, value } = props;
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const pushAlert = usePushAlert();
  const project = useSelector(store => store.project);
  const dashboardProject = useSelector(store => store.dashboardProject);
  const finalProject = dashboardProject || project;
  const [uploading, setUploading] = useState(false);
  const input = useRef(null);
  const fieldName = (field.names && field.names[languageCode]) || field.name || keyTranslation[field.key];

  const handleOpenFileSelector = () => {
    input.current.click();
  };

  const handleChangeImage = e => {
    const [file] = e.target.files;

    if (!file) return;

    if (!isVideoFromName(file.name) && !isImageFromName(file.name))
      return pushAlert({ type: 'error', ...language.incorrectType });

    setUploading(true);

    uploadFile(finalProject, file).then(({ data: upload }) => {
      setUploading(false);
      props.onChange(upload.secure_url);
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
