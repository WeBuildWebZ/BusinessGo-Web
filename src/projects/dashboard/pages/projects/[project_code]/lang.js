export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      configuration: 'Configuración',
      siteBuilder: 'Constructor de Sitio Web (Próximamente)',
      formEditor: 'Editor de Formularios',
      registers: 'Registros',
      edit: 'Editar',
      registerUpdated: clientModel => ({
        title: 'Registro actualizado!',
        message: `Se ha actualizado el registro de ${clientModel.name} satisfactoriamente`
      })
    },
    en: {
      project: 'Project',
      configuration: 'Configuration',
      siteBuilder: 'Website Builder (Coming soon)',
      formEditor: 'Form Editor',
      registers: 'Registers',
      edit: 'Edit',
      registerUpdated: clientModel => ({
        title: 'Register updated!',
        message: `${clientModel.name} register has been updated successfully`
      })
    }
  }[language_code]);

const Component = () => <div />;

export default Component;
