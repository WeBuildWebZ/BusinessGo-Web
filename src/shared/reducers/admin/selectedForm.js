const initialState = null;

const SelectedForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedForm': {
      return action.payload;
    }
    case 'resetSelectedForm': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default SelectedForm;
