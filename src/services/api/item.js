import api from '../../utils/axios';

export const listItems = (
  entity,
  project,
  page_size = 10,
  page_number = 1,
  { filters = {}, text_search = '', text_search_fields = [], count = false, add_fields, sort_by } = {}
) =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/items`, {
    params: {
      entity,
      page_size,
      page_number,
      ...Object.fromEntries(Object.keys(filters).map(key => [`value.${key}`, filters[key]])),
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields.map(field => `value.${field}`),
      ...Object.fromEntries(
        text_search_fields.map(field => [
          `value.${field.split('+').join('+value.')}`,
          text_search || filters[field]
        ])
      ),
      count,
      add_fields,
      sort_by
    }
  });

export const deleteItem = clientDocument => api.delete(`api/items/${encodeURIComponent(clientDocument._id)}`);

export const createItem = (entity, project_code, clientDocument) =>
  api.post(`api/projects/${encodeURIComponent(project_code)}/items`, {
    entity,
    value: clientDocument
  });

export const updateItem = clientDocument =>
  api.put(`api/items/${encodeURIComponent(clientDocument._id)}`, clientDocument);

export const listDistinctItems = (project_code, keys = []) =>
  api.get(`api/projects/${encodeURIComponent(project_code)}/item_distinct`, {
    params: Object.fromEntries(keys.map(key => [`value.${key}`, true]))
  });

export const showItem = _id => api.get(`api/items/${encodeURIComponent(_id)}`);
