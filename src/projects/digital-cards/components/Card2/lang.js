export const getLanguage = langCode =>
  ({
    es: {
      businessFlags: {
        home_service: 'Servicio a domicilio',
        rappi_zone: 'Zona de servicio Rappi',
        uber_zone: 'Zona de servicio UberEats',
        credit_card: 'Tarjeta de Crédito',
        debit_card: 'Tarjeta de Débito'
      },
      aboutBusiness: 'Acerca del negocio',
      aboutPerson: 'Acerca de mí',
      address: 'Domicilio',
      businessHours: 'Días y horarios',
      addContact: 'Guarda en tus contactos',
      services: 'Servicios',
      agenda: 'Agenda',
      completeName: 'Nombre completo',
      email: 'Correo elecrónico',
      phone: 'Teléfono de contacto',
      day: 'Día',
      hour: 'Hora',
      message: 'Mensaje',
      schedule: 'Agendar',
      documents: 'Documentos'
    },
    en: {
      businessFlags: {
        home_service: 'Home service',
        rappi_zone: 'Rappi service zone',
        uber_zone: 'UberEats service zone',
        credit_card: 'Credit card',
        debit_card: 'Debit card'
      },
      aboutBusiness: 'About business',
      aboutPerson: 'About me',
      address: 'Address',
      businessHours: 'Operation days and hours',
      addContact: 'Save to your contacts',
      services: 'Services',
      agenda: 'Agenda',
      completeName: 'Complete name',
      email: 'Email',
      phone: 'Contact phone',
      day: 'Day',
      hour: 'Hour',
      message: 'Message',
      schedule: 'Schedule',
      documents: 'Documents'
    }
  }[langCode]);
