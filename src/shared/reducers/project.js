const iniitalState = null;

const ProjectReducer = (state = iniitalState, action = {}) => {
  switch (action.type) {
    case 'setProject': {
      return action.payload;
    }
    case 'resetProject': {
      return iniitalState;
    }
    default: {
      return state;
    }
  }
};

export default ProjectReducer;
