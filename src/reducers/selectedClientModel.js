const SelectedClientModel = (state = null, action = {}) => {
  switch (action.type) {
    case 'setSelectedClientModel': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default SelectedClientModel;
