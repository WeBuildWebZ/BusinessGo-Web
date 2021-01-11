export const setCartItems = items => ({ type: 'setCartItems', payload: items });

export const setCartItem = item => ({ type: 'setCartItem', payload: item });

export const removeCartItem = item => ({ type: 'removeCartItem', payload: item });

export const removeAllCartItems = () => ({ type: 'removeAllCartItems', payload: null });
