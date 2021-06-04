export const getLanguage = language_code =>
  ({
    es: {
      company: 'Empresa',
      productsServices: 'Productos / Servicios',
      businessHours: 'Días y Horarios',
      address: 'Domicilio'
    },
    en: {
      company: 'Company',
      productsServices: 'Products / Services',
      businessHours: 'Business Hours',
      address: 'Address'
    }
  }[language_code]);
