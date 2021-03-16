export const setForumPagination = forumPagination => ({
  type: 'setForumPagination',
  payload: forumPagination
});

export const resetForumPagination = () => ({ type: 'resetForumPagination', payload: null });
