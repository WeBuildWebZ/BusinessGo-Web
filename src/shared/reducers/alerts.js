const initialState = [];

const Alerts = (state = initialState, action = {}) => {
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
    case 'resetAlerts': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Alerts;
