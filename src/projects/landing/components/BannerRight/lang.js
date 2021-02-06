export const getLanguage = langCode =>
  ({
    es: {
      domainDotCom: 'Dominio.com',
      webDesign: 'Diseño\nWeb'
    },
    en: {
      domainDotCom: 'Domain.com',
      webDesign: 'Web\nDesign'
    }
  }[langCode]);
