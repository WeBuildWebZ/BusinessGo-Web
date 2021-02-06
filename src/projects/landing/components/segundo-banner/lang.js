export const getLanguage = langCode =>
  ({
    es: {
      title: 'Sabías que...?',
      message:
        'El 80% de los negocios son en Internet?, y en su casi totalidad, son efectuados en dispositivos Móviles? nosotros podemos ayudarte, queremos...'
    },
    en: {
      title: 'Did you know that...?',
      message:
        '80% of businesses are on the Internet?, and almost all of them are made on mobile devices? We can help you, we want to...'
    }
  }[langCode]);
