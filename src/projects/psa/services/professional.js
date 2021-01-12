import qs from 'qs';

export const getProfessionals = (page_number, filters = {}, text_search = '') =>
  fetch(
    `${process.env.API_URL}/api/client_documents?${qs.stringify({
      table_name: 'psa-professionals',
      page_size: 18,
      page_number,
      ...filters,
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: ['value.name', 'value.workshop_name', 'value.address', 'value.city'],
      'value.name': text_search,
      'value.workshop_name': text_search,
      'value.address': text_search,
      'value.city': filters['value.city'] || text_search
    })}`
  ).then(response => response.json());

export const getProfessionalFilters = () =>
  fetch(
    `${process.env.API_URL}/api/client_document_distinct?value.region&value.city&value.work_area`
  ).then(response => response.json());
