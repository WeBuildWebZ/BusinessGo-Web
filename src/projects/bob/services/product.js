import { getClientDocuments, getDistinctClientDocuments } from '../../../services/api/clientDocument';

export const getProducts = (page_size, page_number, filters = {}) =>
  getClientDocuments('product', page_size, page_number, filters, '', []);

export const getDistinctProducts = () => getDistinctClientDocuments(['category']);
