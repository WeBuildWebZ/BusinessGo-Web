const initialState = null;

const Session = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSession': {
      return action.payload;
    }
    case 'resetSession': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Session;
