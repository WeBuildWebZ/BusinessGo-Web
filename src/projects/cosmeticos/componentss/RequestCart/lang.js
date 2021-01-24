export const getLanguage = language_code =>
  ({
    es: {
      title: 'Creación de Pedido',
      description: 'Para realizar el pedido, por favor completa estos datos.',
      makeRequest: 'Finalizar Pedido',
      requestOk: { title: 'Pedido Creado', message: 'Hemos creado el pedido con éxito!' }
    },
    en: {
      title: 'Request creation',
      description: 'In order to make the request, fill out this form.',
      makeRequest: 'Make Request',
      requestOk: { title: 'Request Created', message: 'We have created the request successfully!' }
    }
  }[language_code]);
