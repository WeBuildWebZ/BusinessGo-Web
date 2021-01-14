export const setSelectedClientModel = clientModel => ({
  type: 'setSelectedClientModel',
  payload: clientModel
});

export const resetSelectedClientModel = () => ({ type: 'resetSelectedClientModel' });
