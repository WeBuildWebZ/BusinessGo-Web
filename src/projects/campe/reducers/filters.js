const iniitalState = {
  categories: []
};

const Filters = (state = iniitalState, action = {}) => {
  switch (action.type) {
    case 'updateFilters': {
      return { ...state, [action.payload.key]: action.payload.value };
    }
    default: {
      return state;
    }
  }
};

export default Filters;
