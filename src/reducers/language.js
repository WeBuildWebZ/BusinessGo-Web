const Language = (state = 'es', action = {}) => {
  switch (action.type) {
    case 'setLanguage': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default Language;
