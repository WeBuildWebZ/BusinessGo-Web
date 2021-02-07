export const getLanguage = langCode =>
  ({
    es: {
      channel: 'Canal',
      active: 'Activa',
      inactive: 'Inactiva',
      messageCount: conversation =>
        `${conversation.message_count} Mensaje${conversation.message_count > 1 ? 's' : ''}`
    },
    en: {
      channel: 'Channel',
      active: 'Active',
      inactive: 'Inactive',
      messageCount: conversation =>
        `${conversation.message_count} Message${conversation.message_count > 1 ? 's' : ''}`
    }
  }[langCode]);
