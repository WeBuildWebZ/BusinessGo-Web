export const getLanguage = langCode =>
  ({
    es: {
      title: 'Editor de Formularios',
      showTitle: form => `Editar formulario de ${form.name}`,
      saveChanges: 'Guardar Cambios',
      formUpdated: form => ({
        title: 'Formulario actualizado!',
        message: `Hemos actualizado el formulario de ${form.name} satisfactoriamente.`
      })
    },
    en: {
      title: 'Form Editor',
      showTitle: form => `Edit form: ${form.name}`,
      saveChanges: 'Save Changes',
      formUpdated: form => ({
        title: 'Form updated!',
        message: `We've updated the form ${form.name} successfully.`
      })
    }
  }[langCode]);

const Component = () => <div />;

export default Component;
