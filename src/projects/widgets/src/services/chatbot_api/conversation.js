import api from '../../utils/axios';

export const showConversation = (project, conversation_id) =>
  api.get(
    `chatbot_api/projects/${encodeURIComponent(project.code)}/conversations/${encodeURIComponent(
      conversation_id
    )}`
  );

export const listConversations = (
  project,
  page_number,
  page_size = 10,
  filters = {},
  text_search = '',
  text_search_fields = []
) =>
  api.get(`chatbot_api/projects/${encodeURIComponent(project.code)}/conversations`, {
    params: {
      page_size,
      page_number,
      ...filters,
      regex_flags: 'i',
      regex_normalize_characters: true,
      regex_fields: text_search_fields,
      ...Object.fromEntries(text_search_fields.map(field => [field, text_search]))
    }
  });
