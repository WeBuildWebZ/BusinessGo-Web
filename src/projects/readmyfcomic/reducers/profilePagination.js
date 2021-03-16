const initialState = null;

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
