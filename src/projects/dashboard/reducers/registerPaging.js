const iniitalState = {};

const RegisterPagingReducer = (state = iniitalState, action = {}) => {
  switch (action.type) {
    case 'setRegisterPaging': {
      const newState = {
        ...state,
        [action.payload.entity]: {
          ...(state[action.payload.entity] || { selectedPage: 1, selectedRegister: {} }),
          ...action.payload.paging
        }
      };
      console.log('old entity state', state[action.payload.entity]);
      console.log('new state', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default RegisterPagingReducer;
