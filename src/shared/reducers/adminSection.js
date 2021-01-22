const initialState = 'tables';

const AdminSectionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setAdminSection': {
      return action.payload;
    }
    case 'resetAdminSection': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default AdminSectionReducer;
