export const setComicPagination = comicPagination => ({
  type: 'setComicPagination',
  payload: comicPagination
});

export const resetComicPagination = () => ({ type: 'resetComicPagination', payload: null });
