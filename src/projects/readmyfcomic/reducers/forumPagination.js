const initialState = null;

const ForumPagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setForumPagination': {
      return action.payload;
    }
    case 'resetForumPagination': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default ForumPagination;
