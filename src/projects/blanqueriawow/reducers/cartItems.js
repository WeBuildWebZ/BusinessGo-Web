let initialState = [];

if (process.browser) initialState = JSON.parse(sessionStorage.getItem('cartItems')) || [];

const CartItems = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setCartItems': {
      return action.payload;
    }
    case 'setCartItem': {
      const newState = [
        ...state.filter(item => item.product._id !== action.payload.product._id),
        action.payload
      ];

      sessionStorage.setItem('cartItems', JSON.stringify(newState));

      return newState;
    }
    case 'removeCartItem': {
      return state.filter(item => item.product._id !== action.payload.product._id);
    }
    case 'removeAllCartItems': {
      sessionStorage.setItem('cartItems', '[]');
      return [];
    }
    default: {
      return state;
    }
  }
};

export default CartItems;
