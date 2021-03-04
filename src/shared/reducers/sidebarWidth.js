const initialState = 0;

const SidebarWidth = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSidebarWidth': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default SidebarWidth;
