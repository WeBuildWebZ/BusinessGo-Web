const FavProducts = (state = [], action = {}) => {
  switch (action.type) {
    case 'setFavProducts': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default FavProducts;
