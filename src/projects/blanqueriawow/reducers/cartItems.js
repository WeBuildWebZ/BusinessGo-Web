const CartItems = (state = [], action = {}) => {
  switch (action.type) {
    case 'setCartItem': {
      return [...state.filter(item => item.product._id !== action.payload.product._id), action.payload];
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
