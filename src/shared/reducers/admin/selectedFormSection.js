const initialState = 'show'; // edit | show

const SelectedFormSection = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedFormSection': {
      return action.payload;
    }
    case 'resetSelectedFormSection': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default SelectedFormSection;
