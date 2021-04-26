import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FileIcon } from 'react-file-icon';
import { v4 as uuid } from 'uuid';

import { fieldShape } from '../../../utils/field';
import usePushAlert from '../../../shared/hooks/usePushAlert';
import * as aws from '../../../utils/aws';

import ProgressBar from './ProgressBar';
import { getLanguage } from './lang';
import * as utils from './utils';

const FilePicker = props => {
  const { field } = props;
  const pushAlert = usePushAlert();
  const files = props.value || [];
  const [progresses, setProgresses] = useState([]);
  const [fileDragged, setFileDragged] = useState(false);
  const project = useSelector(store => store.project);
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const fieldName = (field.names && field.names[languageCode]) || field.name;
  const pickerRef = useRef();
  const filesRef = useRef();
  const progressesRef = useRef();
  filesRef.current = files;
  progressesRef.current = progresses;

  const handlePickFile = () => {
    pickerRef.current.click();
  };

  const updateProgress = newProgress => {
    const newProgresses = [...progressesRef.current];
    const previousProgress = progressesRef.current.find(progress => progress.fileId === newProgress.fileId);
    if (previousProgress)
      newProgresses.forEach((progress, i) => {
        if (progress.fileId === newProgress.fileId) newProgresses[i] = newProgress;
      });
    else newProgresses.push(newProgress);
    setProgresses(newProgresses);
  };

  const updateFile = newFile => {
    const newFiles = filesRef.current.map(file => (newFile.id === file.id ? newFile : file));
    props.onChange(newFiles);
  };

  const handleSetFiles = newFiles => {
    newFiles.forEach(file => (file.id = uuid()));
    setFileDragged(false);
    const currentFiles = filesRef.current;
    const totalFiles = [...currentFiles, ...newFiles];

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

    props.onUploadStart();

    newFiles.forEach((file, i) => {
      const index = currentFiles.length + i;
      aws
        .uploadFile(file, progress => {
          updateProgress({ fileId: file.id, number: progress });
        })
        .then(({ url }) => {
          updateProgress({ fileId: file.id, number: 100 });
          updateFile({ id: file.id, name: file.name, size: file.size, url });
          if (utils.allFilesUploaded(progressesRef.current)) props.onUploadEnd();
        });
    });

    props.onChange(totalFiles);
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
    const newProgresses = progresses.filter((_, i) => i !== index);
    const newFiles = files.filter((_, i) => i !== index);
    props.onChange(newFiles);
    setProgresses(newProgresses);
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
          <div className="fileNameContainer">
            {file?.name || language.selectFile}
            {progresses[i] && <ProgressBar progress={progresses[i].number} />}
          </div>
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
          .fileNameContainer {
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};

FilePicker.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  field: fieldShape.isRequired,
  onChange: PropTypes.func,
  onUploadStart: PropTypes.func,
  onUploadEnd: PropTypes.func
};

FilePicker.defaultProps = {
  value: [],
  onChange: () => {},
  onUploadStart: () => {},
  onUploadEnd: () => {}
};

export default FilePicker;
