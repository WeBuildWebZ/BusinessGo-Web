const initialState = null;

const ConfigurationSection = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setConfigurationSection': {
      return action.payload;
    }
    case 'resetConfigurationSection': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default ConfigurationSection;
