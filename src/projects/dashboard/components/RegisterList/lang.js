export const getLanguage = language_code =>
  ({
    es: {
      rowsPerPage: 'Registros por página',
      actions: 'Acciones',
      deleteMessage: clientModel => `Desea borrar el registro de ${clientModel.name}?`,
      registerDeleted: clientModel => ({
        title: `${clientModel.name} borrado`,
        message: `El registro de ${clientModel.name} ha sido borrado.`
      })
    },
    en: {
      rowsPerPage: 'Rows per page',
      actions: 'Actions',
      deleteMessage: clientModel => `Delete ${clientModel.name} register?`,
      registerDeleted: clientModel => ({
        title: `${clientModel.name} borrado`,
        message: `The ${clientModel.name} register has been deleted.`
      })
    }
  }[language_code]);
