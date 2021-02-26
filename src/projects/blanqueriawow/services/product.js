import { getClientDocuments, getDistinctClientDocuments } from '../../../services/api/clientDocument';

export const getProducts = (project, page_size, page_number, filters = {}, search = '') =>
  getClientDocuments('product', project, page_size, page_number, filters, search, ['category', 'name']);

export const getDistinctProducts = () => getDistinctClientDocuments(['category']);
