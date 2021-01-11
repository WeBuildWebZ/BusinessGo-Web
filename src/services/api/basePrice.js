import api from '../../utils/axios';

export const getBasePrices = currency => api.get('api/base_prices', { params: { currency } });
