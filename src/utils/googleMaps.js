export const getCoordinates = url => {
  const match = url.match(/@[-?\d.]*,([-?\d.]*)/);

  if (!match) return null;

  const [latitude, longitude] = match[0]
    .substr(1)
    .split(',')
    .map(_match => +_match);

  return { latitude, longitude };
};
