import api from '../utils/axios';

export const getClientDocuments = (
  table_name,
  page_size,
  page_number,
  filters = {},
  text_search = '',
  text_search_fields = []
) =>
  api.get('client_documents', {
    params: {
      table_name,
      page_size,
      page_number,
      ...filters,
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields.map(field => `value.${field}`),
      ...Object.fromEntries(text_search_fields.map(field => [`value.${field}`, text_search]))
    }
  });

export const deleteClientDocument = (user, clientDocument) =>
  api.delete(
    `users/${encodeURIComponent(user._id)}/client_documents/${encodeURIComponent(clientDocument._id)}`
  );

export const updateClientDocument = (user, clientDocument) =>
  api.put(
    `users/${encodeURIComponent(user._id)}/client_documents/${encodeURIComponent(clientDocument._id)}`,
    clientDocument
  );
