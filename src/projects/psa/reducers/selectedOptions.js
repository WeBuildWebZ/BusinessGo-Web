const initialState = {
  regions: [],
  cities: [],
  workAreas: []
};

const SelectedOptions = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedOptions':
      return action.payload;
    default:
      return state;
  }
};

export default SelectedOptions;
