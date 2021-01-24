import { getNumber } from './string';

export const getProductPrice = (product, amount) =>
  (+getNumber(amount) * getNumber(product.price) * (1 - getNumber(product.discount) / 100)).toFixed(2);
