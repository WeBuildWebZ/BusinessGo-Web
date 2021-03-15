import api from '../../utils/axios';

export const getClientDocuments = (
  entity,
  project,
  page_size = 10,
  page_number = 1,
  filters = {},
  text_search = '',
  text_search_fields = [],
  count = false
) =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/client_documents`, {
    params: {
      entity,
      page_size,
      page_number,
      ...Object.fromEntries(Object.keys(filters).map(key => [`value.${key}`, filters[key]])),
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields.map(field => `value.${field}`),
      ...Object.fromEntries(
        text_search_fields.map(field => [`value.${field}`, text_search || filters[field]])
      ),
      count
    }
  });

export const deleteClientDocument = clientDocument =>
  api.delete(`api/client_documents/${encodeURIComponent(clientDocument._id)}`);

export const createClientDocument = (entity, project_code, clientDocument) =>
  api.post(`api/projects/${encodeURIComponent(project_code)}/client_documents`, {
    entity,
    value: clientDocument
  });

export const updateClientDocument = clientDocument =>
  api.put(`api/client_documents/${encodeURIComponent(clientDocument._id)}`, clientDocument);

export const getDistinctClientDocuments = (keys = []) =>
  api.get('api/client_document_distinct', {
    params: Object.fromEntries(keys.map(key => [`value.${key}`, true]))
  });

export const showClientDocument = _id => api.get(`api/client_documents/${encodeURIComponent(_id)}`);
