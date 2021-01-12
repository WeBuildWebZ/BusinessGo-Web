const ProjectReducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'setProject': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default ProjectReducer;
