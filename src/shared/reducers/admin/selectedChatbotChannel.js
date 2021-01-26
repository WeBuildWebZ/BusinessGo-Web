const initialState = null;

const SelectedChatbotChannel = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedChatbotChannel': {
      return action.payload;
    }
    case 'resetSelectedChatbotChannel': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default SelectedChatbotChannel;
