export const setRegisterPaging = (entity, pageNumber) => ({
  type: 'setRegisterPaging',
  payload: {
    entity,
    pageNumber
  }
});
