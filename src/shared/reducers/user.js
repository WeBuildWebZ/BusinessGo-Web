const initialState = null;

const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setUser': {
      return action.payload;
    }
    case 'resetUser': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default User;
