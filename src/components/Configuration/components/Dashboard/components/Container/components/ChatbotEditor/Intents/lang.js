export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Intenciones para canal ${channel}`,
      editIntent: 'Editar',
      deleteIntent: 'Borrar',
      createIntent: 'Crear Intención',
      intentCreated: {
        title: 'Intención Creada',
        message: intent => `La intención "${intent.name}" fue creada correctamente!`
      },
      intentUpdated: {
        title: 'Intención Actualizada',
        message: intent => `La intención "${intent.name}" fue actualizada correctamente!`
      }
    },
    en: {
      title: channel => `Intents for channel ${channel}`,
      editIntent: 'Edit',
      deleteIntent: 'Delete',
      createIntent: 'Create Intent',
      intentCreated: {
        title: 'Intent Created',
        message: intent => `Intent "${intent.name}" was created successfully!`
      },
      intentUpdated: {
        title: 'Intent Updated',
        message: intent => `Intent "${intent.name}" was updated successfully!`
      }
    }
  }[language_code]);
