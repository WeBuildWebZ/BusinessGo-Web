const initialState = null;

const SelectedChatbotSection = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedChatbotSection': {
      return action.payload;
    }
    case 'resetSelectedChatbotSection': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default SelectedChatbotSection;
