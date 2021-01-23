export const getLanguage = language_code =>
  ({
    es: {
      getTitle: form => `Editar formulario de ${form.name}`,
      fieldName: 'Nombre del Campo',
      addField: 'Agregar Campo',
      newField: 'Nuevo campo',
      saveChanges: 'Guardar Cambios',
      formSaved: { title: 'Formulario Guardado', message: 'El formulario fue guardado correctamente' },
      inputTypes: {
        text: 'Texto',
        number: 'Número',
        'textarea-small': 'Área de texto - pequeño',
        'textarea-medium': 'Área de texto - mediano',
        'textarea-big': 'Área de texto - grande',
        image: 'Imagen',
        enum: 'Lista de Opciones',
        group: 'Grupo de Campos',
        select: 'Selector',
        button: 'Botón'
      }
    },
    en: {
      getTitle: form => `Edit ${form.name} Form`,
      fieldName: 'Field Name',
      addField: 'Add Field',
      newField: 'New Field',
      saveChanges: 'Save Changes',
      formSaved: { title: 'Form Saved', message: 'Form saved successfully' },

      inputTypes: {
        text: 'Text',
        number: 'Number',
        'textarea-small': 'Text Area - small',
        'textarea-medium': 'Text Area - medium',
        'textarea-big': 'Text Area - big',
        image: 'Image',
        enum: 'Option List',
        group: 'Field Group',
        select: 'Select Input',
        button: 'Button'
      }
    }
  }[language_code]);
