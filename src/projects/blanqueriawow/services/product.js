import { getClientDocuments, getDistinctClientDocuments } from '../../../services/api/clientDocument';

export const getProducts = (page_size, page_number, filters = {}, search = '') =>
  getClientDocuments('wow-products', page_size, page_number, filters, search, ['category', 'name']);

export const getDistinctProducts = () => getDistinctClientDocuments(['category']);
