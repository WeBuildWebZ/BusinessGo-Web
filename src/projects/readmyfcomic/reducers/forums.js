const initialState = null;

const Forums = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setForums': {
      return action.payload;
    }
    case 'resetForums': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Forums;
