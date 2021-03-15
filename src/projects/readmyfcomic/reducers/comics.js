const initialState = null;

const Comics = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setComics': {
      return action.payload;
    }
    case 'resetComics': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default Comics;
