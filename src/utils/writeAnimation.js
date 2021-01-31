export const writeWithAnimation = (text = '', onChange = () => {}, delay = 50) => {
  let currentText = '';
  let currentIndex = 0;

  const interval = setInterval(() => {
    if (currentText === text) return clearInterval(interval);

    currentText += text[currentIndex];
    currentIndex += 1;

    onChange(currentText);
  }, delay);
};
