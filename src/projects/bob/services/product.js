import { listItems, listDistinctItems } from '../../../services/api/item';

export const getProducts = (page_size, page_number, filters = {}) =>
  listItems('product', page_size, page_number, filters, '', []);

export const getDistinctProducts = () => listDistinctItems(['category']);
