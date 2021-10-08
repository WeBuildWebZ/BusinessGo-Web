const initialState = typeof window === 'object' ? localStorage.getItem('token') : null;

const Token = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setToken': {
      localStorage.setItem('token', action.payload);
      return action.payload;
    }
    case 'removeToken': {
      localStorage.removeItem('token');
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default Token;
