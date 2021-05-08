import { listItems, listDistinctItems } from '../../../services/api/item';

export const getProducts = (project, page_size, page_number, filters = {}, search = '') =>
  listItems('product', project, page_size, page_number, filters, search, ['category', 'name']);

export const getDistinctProducts = () => listDistinctItems(['category']);
