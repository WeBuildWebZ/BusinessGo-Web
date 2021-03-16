export const setProfilePagination = profilePagination => ({
  type: 'setProfilePagination',
  payload: profilePagination
});

export const resetProfilePagination = () => ({ type: 'resetProfilePagination', payload: null });
