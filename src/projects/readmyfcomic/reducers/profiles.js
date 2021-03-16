const initialState = null;

const Profiles = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setProfiles': {
      return action.payload;
    }
    case 'resetProfiles': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Profiles;
