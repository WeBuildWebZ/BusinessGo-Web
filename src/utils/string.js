export const getNumber = (str = '') => {
  if (typeof str === 'number') return str;

  return (
    +str
      .split('')
      .filter(char => {
        const charCode = char.charCodeAt();
        return (charCode >= 48 && charCode <= 57) || charCode === 46;
      })
      .join('') || 0
  );
};
