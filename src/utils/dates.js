const formatNumber = number => `${number}`.padStart(2, '0');

export const getFormattedHour = date =>
  `${formatNumber(date.getUTCHours())}:${formatNumber(date.getUTCMinutes())}`;
