const initialState = null;

const ClientModels = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setClientModels': {
      return action.payload;
    }
    case 'resetClientModels': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default ClientModels;
