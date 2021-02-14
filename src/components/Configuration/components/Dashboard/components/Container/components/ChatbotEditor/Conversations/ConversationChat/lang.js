export const getLanguage = langCode =>
  ({
    es: {
      newMessage: 'WeBuildWebz: Nuevo mensaje',
      userDisconnected: 'El usuario ya se desconectó de la conversación',
      writeAMessage: 'Escribe un mensaje...'
    },
    en: {
      newMessage: 'WeBuildWebz: New Message',
      userDisconnected: 'The user has already disconnected from the conversation',
      writeAMessage: 'Write a message to the user...'
    }
  }[langCode]);
