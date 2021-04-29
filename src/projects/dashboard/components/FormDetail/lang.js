export const getLanguage = langCode =>
  ({
    es: {
      saveChanges: 'Guardar Cambios',
      selectVariant: 'Seleccionar variante',
      selectStep: 'Seleccionar paso',
      formUpdated: form => ({
        title: 'Formulario actualizado!',
        message: `Hemos actualizado el formulario de ${form.name} satisfactoriamente.`
      })
    },
    en: {
      selectVariant: 'Select variant',
      selectStep: 'Select step',
      saveChanges: 'Save Changes',
      formUpdated: form => ({
        title: 'Form updated!',
        message: `We've updated the form ${form.name} successfully.`
      })
    }
  }[langCode]);
