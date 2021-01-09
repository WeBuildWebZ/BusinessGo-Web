const CartItems = (state = [], action = {}) => {
  switch (action.type) {
    case 'setCartItems': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default CartItems;
