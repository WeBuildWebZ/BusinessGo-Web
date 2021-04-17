import mime from 'mime-types';

export const isImage = file => file.type.startsWith('image/');

export const isImageFromName = fileName => mime.lookup(fileName).startsWith('image/');

export const isVideoFromName = fileName => mime.lookup(fileName).startsWith('video/');
