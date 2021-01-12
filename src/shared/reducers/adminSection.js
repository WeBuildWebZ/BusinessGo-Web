const AdminSectionReducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'setAdminSection': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default AdminSectionReducer;
