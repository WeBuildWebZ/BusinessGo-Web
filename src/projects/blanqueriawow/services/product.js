import { listItems, listDistinctItems } from '../../../services/api/item';

export const getProducts = (project, page_size, page_number, filters = {}, text_search = '') =>
  listItems('product', project, page_size, page_number, {
    filters,
    text_search,
    text_search_fields: ['category', 'name']
  });

export const getDistinctProducts = () => listDistinctItems(['category']);
