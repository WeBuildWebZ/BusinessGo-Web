import bytes from 'bytes';

export const sizeValidation = (files, field) => {
  const totalSize = files.map(file => file.size).reduce((a, b) => a + b);
  console.log('totalSize', totalSize);
  return totalSize <= bytes.parse(field.file_options.max_size);
};
