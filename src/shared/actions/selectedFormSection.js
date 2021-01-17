export const setSelectedFormSection = formSection => ({
  type: 'setSelectedFormSection',
  payload: formSection
});

export const resetSelectedFormSection = () => ({ type: 'resetSelectedFormSection' });
