const iniitalState = {};

const RegisterPagingReducer = (state = iniitalState, action = {}) => {
  switch (action.type) {
    case 'setRegisterPaging': {
      return {
        ...state,
        [action.payload.entity]: { pageNumber: action.payload.pageNumber }
      };
    }
    default: {
      return state;
    }
  }
};

export default RegisterPagingReducer;
