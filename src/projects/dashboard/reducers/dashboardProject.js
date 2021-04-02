const iniitalState = null;

const DashboardProjectReducer = (state = iniitalState, action = {}) => {
  switch (action.type) {
    case 'setDashboardProject': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default DashboardProjectReducer;
