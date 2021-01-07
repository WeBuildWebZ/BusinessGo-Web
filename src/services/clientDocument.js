import qs from 'qs';

export const getClientDocuments = (table_name, page_size, page_number, filters = {}, text_search = '') =>
  fetch(
    `${process.env.API_URL}/client_documents?${qs.stringify({
      table_name,
      page_size,
      page_number,
      ...filters
    })}`
  ).then(response => response.json());
