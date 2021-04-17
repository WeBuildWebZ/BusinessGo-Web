import bytes from 'bytes';

export const sizeValidation = (files, field) => {
  const totalSize = files.map(file => file.size).reduce((a, b) => a + b);
  return totalSize <= bytes.parse(field.file_options.max_size);
};

export const allFilesUploaded = (progresses = []) =>
  progresses.every(progress => typeof progress !== 'number' || progress === 100);
