export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      registers: 'Registros',
      configurationUpdated: {
        title: 'Configuración actualizada',
        message: 'la configuración fue actualizada'
      },
      noRegisters: 'No hay registros para editar'
    },
    en: {
      project: 'Project',
      registers: 'Registers',
      configurationUpdated: { title: 'Configuration updated', message: 'The configuration was updated' },
      noRegisters: 'No registers to edit'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;
