const initialState = null;

const ComicPagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setComicPagination': {
      return action.payload;
    }
    case 'resetComicPagination': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default ComicPagination;
