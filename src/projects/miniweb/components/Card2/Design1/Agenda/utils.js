export const getHourOptions = () => {
  const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
  const minutes = ['00', '15', '30', '45'];
  const times = ['AM', 'PM'];
  const combinations = [];

  times.forEach(time => {
    hours.forEach(hour => {
      minutes.forEach(minute => {
        const value = `${hour}:${minute} ${time}`;
        combinations.push({ text: value, value });
      });
    });
  });

  return combinations;
};
