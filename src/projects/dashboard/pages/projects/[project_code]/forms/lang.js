export const getLanguage = langCode =>
  ({
    es: {
      title: 'Editor de Formularios',
      showTitle: form => (form ? `Editar formulario de ${form.name}` : 'Editor de formulario'),
      saveChanges: 'Guardar Cambios',
      selectVariant: 'Seleccionar variante',
      selectStep: 'Seleccionar paso',
      formUpdated: form => ({
        title: 'Formulario actualizado!',
        message: `Hemos actualizado el formulario de ${form.name} satisfactoriamente.`
      })
    },
    en: {
      title: 'Form Editor',
      showTitle: form => (form ? `Edit form: ${form.name}` : 'Form editor'),
      selectVariant: 'Select variant',
      selectStep: 'Select step',
      saveChanges: 'Save Changes',
      formUpdated: form => ({
        title: 'Form updated!',
        message: `We've updated the form ${form.name} successfully.`
      })
    }
  }[langCode]);

const Component = () => <div />;

export default Component;
