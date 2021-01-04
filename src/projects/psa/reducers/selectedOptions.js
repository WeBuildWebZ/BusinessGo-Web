const initialState = {
  regions: [],
  cities: [],
  workAreas: []
};

const SelectedOptions = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedOptions':
      return { ...state, [action.option]: action.payload };
    default:
      return state;
  }
};

export default SelectedOptions;
