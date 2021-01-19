import api from '../../utils/axios';

export const listFormResponses = (
  project_code,
  form_code,
  page_size,
  page_number,
  filters = {},
  text_search = '',
  text_search_fields = []
) =>
  api.get(
    `api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form_code)}/form_responses`,
    {
      params: {
        page_size,
        page_number,
        ...Object.fromEntries(Object.keys(filters).map(key => [`value.${key}`, filters[key]])),
        regex_flags: 'i',
        regex_normalize_characters: true,
        regex_fields: text_search_fields.map(field => `value.${field}`),
        ...Object.fromEntries(text_search_fields.map(field => [`value.${field}`, text_search]))
      }
    }
  );

export const createFormResponse = (project_code, form_code, data) =>
  api.post(
    `api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form_code)}/form_responses`,
    data
  );
