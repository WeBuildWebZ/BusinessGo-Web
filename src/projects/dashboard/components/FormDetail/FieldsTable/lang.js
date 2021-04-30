export const getLanguage = langCode =>
  ({
    es: {
      fieldName: { title: 'Nombre del campo', description: 'Muestra el nombre del campo' },
      edit: { title: 'Editar', description: 'Botón para editar un campo en específico' }
    },
    en: {
      fieldName: { title: 'Field name', description: 'It shows the field name' },
      edit: { title: 'Edit', description: 'Button for editing a specific field.' }
    }
  }[langCode]);
