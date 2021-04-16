import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FileIcon } from 'react-file-icon';

import { fieldShape } from '../../../utils/field';
import usePushAlert from '../../../shared/hooks/usePushAlert';
import { uploadFile } from '../../../services/cloudinary/file';

import { getLanguage } from './lang';
import * as utils from './utils';

const FilePicker = props => {
  const { field } = props;
  const pushAlert = usePushAlert();
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState([]);
  const [fileDragged, setFileDragged] = useState(false);
  const project = useSelector(store => store.project);
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const fieldName = (field.names && field.names[languageCode]) || field.name;
  const pickerRef = useRef();
  const filesRef = useRef();
  filesRef.current = files;

  const handleAddFiles = e => {};

  const handlePickFile = () => {
    pickerRef.current.click();
  };

  console.log('field', field);
  console.log('files', files);

  const handleSetFiles = newFiles => {
    setFileDragged(false);
    const totalFiles = [...filesRef.current, ...newFiles];

    if (!utils.sizeValidation(totalFiles, field))
      return pushAlert({
        type: 'error',
        title: language.invalidSize.title,
        message: language.invalidSize.message
      });

    if (totalFiles.length > field.file_options.max_files)
      return pushAlert({
        type: 'error',
        title: language.invalidLength.title,
        message: language.invalidLength.message
      });

    newFiles.forEach((file, i) => {
      uploadFile(project, file, progress => {
        const newProgresses = [...progresses];
        newProgresses[i] = progress;
        console.log('progress');
        setProgresses(newProgresses);
      });
    });

    setFiles(totalFiles);
  };

  const handleDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    handleSetFiles(e.dataTransfer.files);
  };

  const handleRemoveFile = index => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  useEffect(() => {
    const handleChangeFile = e => {
      handleSetFiles(e.target.files);
    };

    pickerRef.current.addEventListener('change', handleChangeFile);
    return () => {
      pickerRef.current?.removeEventListener('change', handleChangeFile);
    };
  }, []);

  return (
    <div className="filePicker">
      <h6 className="fieldName">{fieldName}</h6>
      <div
        className={`drop${fileDragged ? ' fileDragged' : ''}`}
        onDragEnter={() => setFileDragged(true)}
        onDragLeave={() => setFileDragged(false)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img
          className={`dropIcon${fileDragged ? ' fileDragged' : ''}`}
          src="/shared/icons/upload.svg"
          onClick={handlePickFile}
          onDragEnter={e => e.preventDefault()}
        />
      </div>
      {files.map((file, i) => (
        <div key={i} className="file">
          <div className="iconContainer">
            <FileIcon extension={file.name.substr(file.name.lastIndexOf('.') + 1)} color="skyblue" />
          </div>
          {file?.name || language.selectFile}
          <i className="fa fa-trash" onClick={() => handleRemoveFile(i)} />
        </div>
      ))}
      <input className="picker" type="file" ref={pickerRef} />
      <style jsx>
        {`
          .fieldName {
            margin: 14px;
          }
          .picker {
            visibility: hidden;
          }
          .filePicker {
          }
          .file {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .iconContainer {
            margin: 7px;
            width: 28px;
          }
          .drop {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            margin: 14px;
            border-style: dotted;
            border-width: 2px;
            border-radius: 7px;
            background-color: #a9a9a9;
            transition: 0.7s;
          }
          .drop.fileDragged {
            transform: scale(1.1);
          }
          .dropIcon {
            width: 40px;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .dropIcon:hover {
            transform: scale(1.1);
          }
          .dropIcon:active {
            transform: scale(1.3) rotate(5deg);
            transition: 0.1s;
          }
          .dropIcon.fileDragged {
            transform: rotate(360deg);
          }
          .fa-trash {
            margin-left: auto;
            margin-right: 14px;
            width: 24px;
            height: fit-content;
            padding: 4px;
            color: red;
            border-radius: 7px;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .fa-trash:hover {
            transform: scale(1.1);
          }
          .fa-trash:active {
            transform: scale(1.2) rotate(5deg);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

FilePicker.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

FilePicker.defaultProps = {
  value: '',
  onChange: () => {}
};

export default FilePicker;
