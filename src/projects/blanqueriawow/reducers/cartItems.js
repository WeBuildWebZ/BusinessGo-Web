let initialState = [];

if (process.browser) initialState = JSON.parse(sessionStorage.getItem('cartItems')) || [];

const CartItems = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default CartItems;
