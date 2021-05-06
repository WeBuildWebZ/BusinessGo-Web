export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      configuration: 'Configuración',
      siteBuilder: 'Constructor de Sitio Web (Próximamente)',
      formEditor: 'Editor de Formularios',
      registers: 'Registros',
      edit: 'Editar',
      create: 'Crear',
      registerUpdated: clientModel => ({
        title: `${clientModel.name} actualizado!`,
        message: `Se ha actualizado el registro de ${clientModel.name} satisfactoriamente.`
      }),
      registerCreated: clientModel => ({
        title: `${clientModel.name} creado!`,
        message: `Se ha creado el registro de ${clientModel.name} satisfactoriamente.`
      }),
      registerCreateError: clientModel => ({
        title: 'Error',
        message: `Hubo un error al intentar crear el registro de ${clientModel.name}.`
      })
    },
    en: {
      project: 'Project',
      configuration: 'Configuration',
      siteBuilder: 'Website Builder (Coming soon)',
      formEditor: 'Form Editor',
      registers: 'Registers',
      edit: 'Edit',
      create: 'Create',
      registerUpdated: clientModel => ({
        title: `${clientModel.name} Register created!`,
        message: `${clientModel.name} register has been created successfully`
      }),
      registerCreateError: clientModel => ({
        title: 'Error',
        message: `There was an error when creating the ${clientModel.name}.`
      })
    }
  }[language_code]);

const Component = () => <div />;

export default Component;
