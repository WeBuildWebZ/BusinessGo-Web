import { getClientDocuments, getDistinctClientDocuments } from '../../../services/clientDocument';

export const getProducts = (page_size, page_number) =>
  getClientDocuments('wow-products', page_size, page_number, {}, '', []);

export const getDistinctProducts = () => getDistinctClientDocuments(['category']);
