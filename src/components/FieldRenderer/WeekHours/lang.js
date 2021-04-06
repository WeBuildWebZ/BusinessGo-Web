export const getLanguage = langCode =>
  ({
    es: {
      opening: 'Hora de apertura',
      closing: 'Hora de cierre',
      days: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo'
      }
    },
    en: {
      opening: 'Opening',
      closing: 'Closing',
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
      }
    }
  }[langCode]);
