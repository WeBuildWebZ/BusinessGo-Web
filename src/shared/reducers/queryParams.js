const initialState = {};

const QueryParamsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setQueryParams': {
      return action.payload;
    }
    case 'resetQueryParams': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default QueryParamsReducer;
