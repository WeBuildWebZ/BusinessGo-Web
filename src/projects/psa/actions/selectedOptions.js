export const setSelectedOptions = (option, selectedOptions) => ({
  type: 'setSelectedOptions',
  option,
  payload: selectedOptions
});

export const clearSelectedOptions = () => ({ type: 'clearSelectedOptions' });

export const removeSelectedOption = (optionName, value) => ({
  type: 'removeSelectedOption',
  payload: { optionName, value }
});
