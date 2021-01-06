const ClientModels = (state = [], action = {}) => {
  switch (action.type) {
    case 'setClientModels': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default ClientModels;
