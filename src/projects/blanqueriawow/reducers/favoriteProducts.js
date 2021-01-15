let initialState = [];

if (process.browser) initialState = JSON.parse(sessionStorage.getItem('favoriteProducts')) || [];

const FavProducts = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'toggleFavoriteProduct': {
      const newState = state.includes(action.payload._id)
        ? state.filter(productId => productId !== action.payload._id)
        : [...state, action.payload._id];

      sessionStorage.setItem('favoriteProducts', JSON.stringify(newState));

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default FavProducts;
