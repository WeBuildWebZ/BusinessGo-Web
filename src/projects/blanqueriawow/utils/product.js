export const getFinalPrice = product => product.price * (1 - (product.discount || 0) / 100);
