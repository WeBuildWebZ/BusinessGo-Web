export const getProfessionalFilters = () =>
  fetch(
    `${process.env.API_URL}/api/client_document_distinct?value.region&value.city&value.work_area`
  ).then(response => response.json());
