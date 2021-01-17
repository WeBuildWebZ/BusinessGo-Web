import api from '../../utils/axios';

export const listFormResponses = (
  table_name,
  page_size,
  page_number,
  filters = {},
  text_search = '',
  text_search_fields = []
) =>
  api.get('api/client_documents', {
    params: {
      table_name,
      page_size,
      page_number,
      ...Object.fromEntries(Object.keys(filters).map(key => [`value.${key}`, filters[key]])),
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields.map(field => `value.${field}`),
      ...Object.fromEntries(text_search_fields.map(field => [`value.${field}`, text_search]))
    }
  });
