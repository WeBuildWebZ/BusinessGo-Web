const initialState = {
  regions: [],
  cities: [],
  workAreas: []
};

const Options = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setOptions':
      return action.payload;
    default:
      return state;
  }
};

export default Options;
