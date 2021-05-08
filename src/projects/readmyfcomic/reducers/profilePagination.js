const initialState = { count: 1, pageSize: 8, maxPages: 2, pageNumber: 1 };

const ProfilePagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setProfilePagination': {
      return action.payload;
    }
    case 'resetProfilePagination': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default ProfilePagination;
