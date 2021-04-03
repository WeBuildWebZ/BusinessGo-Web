export const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const copyNumbers = (str = '') =>
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

export const elementScrolledToBottom = element =>
  element.clientHeight + element.scrollTop >= element.scrollHeight;

export const isInViewport = (element, offset = 0) => {
  if (!element) return;
  const { top } = element.getBoundingClientRect();
  return top + offset >= 0 && top - offset <= window.innerHeight;
};

export const getVisiblePercentage = (element, offset = 0) => {
  if (!element) return 0;
  const { top } = element.getBoundingClientRect();
  const { offsetHeight: height } = element;

  return top >= 0 && top <= window.innerHeight;
};

export const goToLink = (href, target = '') => {
  const a = document.createElement('a');
  a.href = href;
  a.target = target;
  a.click();
};
