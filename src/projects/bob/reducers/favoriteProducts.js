const FavProducts = (state = [], action = {}) => {
  switch (action.type) {
    case 'toggleFavoriteProduct': {
      if (state.includes(action.payload._id))
        return state.filter(productId => productId !== action.payload._id);
      return [...state, action.payload._id];
    }
    default: {
      return state;
    }
  }
};

export default FavProducts;
