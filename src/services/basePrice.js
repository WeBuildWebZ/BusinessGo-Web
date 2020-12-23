import axios from '../utils/axios';

export const getBasePrices = currency =>
  axios({
    method: 'get',
    url: `${process.env.API_URL}/base_prices`,
    params: { currency }
  });
