export const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const copyNumbers = str =>
  copyToClipboard(
    str
      .split('')
      .filter(char => {
        const charCode = char.charCodeAt();
        return charCode >= 48 && charCode <= 57;
      })
      .join('')
  );

export const scrolledToBottom = () =>
  document.documentElement.scrollTop + window.innerHeight >= document.body.scrollHeight;
