const Language = (state = [], action = {}) => {
  switch (action.type) {
    case 'pushAlert': {
      return [...state, action.payload];
    }
    case '_popAlert': {
      return state.filter(alert => alert.id !== action.payload.id);
    }
    case '_hideAlert': {
      return state.map(alert => (alert.id === action.payload.id ? { ...alert, _show: false } : alert));
    }
    default: {
      return state;
    }
  }
};

export default Language;
