import api from '../utils/axios';

export const getClientDocuments = (table_name, page_size, page_number, filters = {}, text_search = '') =>
  api.get('client_documents', {
    params: { table_name, page_size, page_number, ...filters }
  });

export const deleteClientDocument = (user, clientDocument) =>
  api.delete(
    `users/${encodeURIComponent(user._id)}/client_documents/${encodeURIComponent(clientDocument._id)}`
  );
