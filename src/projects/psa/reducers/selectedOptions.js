const initialState = {
  regions: [],
  cities: [],
  workAreas: []
};

const SelectedOptions = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setSelectedOptions':
      return { ...state, [action.option]: action.payload };
    case 'clearSelectedOptions':
      return initialState;
    case 'removeSelectedOption':
      return {
        ...state,
        [action.payload.optionName]: state[action.payload.optionName].filter(
          value => value !== action.payload.value
        )
      };
    default:
      return state;
  }
};

export default SelectedOptions;
