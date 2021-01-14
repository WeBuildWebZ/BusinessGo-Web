const initialState = null;

const SelectedClientModel = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedClientModel': {
      return action.payload;
    }
    case 'resetSelectedClientModel': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default SelectedClientModel;
