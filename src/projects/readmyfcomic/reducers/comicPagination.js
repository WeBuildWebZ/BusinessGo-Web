const initialState = { count: 1, pageSize: 8, maxPages: 2, pageNumber: 1 };

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
