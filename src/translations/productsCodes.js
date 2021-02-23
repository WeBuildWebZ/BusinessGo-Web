export const getFieldKeyTranslation = language_code =>
  ({
    es: {
      free: { name: 'Tarjeta Digital Gratuita', description: 'Para individuos, Freelancers y Estudiantes.' },
      premium: {
        name: 'Tarjeta Digital Premium',
        description:
          'Para Empresarios, Freelancers, Restaurantes, Pequeños Negocios, Agentes	de Ventas, Inmobiliarios	y de	Seguros, PyMEs,	etc'
      },
      company: {
        name: 'Tarjeta Digital de Organización',
        description:
          'Para Empresarios, Freelancers, Restaurantes, Pequeños Negocios, Agentes de Ventas, Inmobiliarios y de Seguros, PyMEs, etc. Nota: para + de 30 usuarios misma empresa.'
      }
    },
    en: {
      free: { name: 'Free Digital Card', description: 'For individuals, Freelancers and Students.' },
      premium: {
        name: 'Premium Digital Card',
        description:
          'For Businessmen, Freelancers, Restaurants, Small Business, Sales Agents, Real Estate	and Insurance agent, SMEs, etc.'
      },
      company: {
        name: 'Company Digital Card',
        description:
          'For Businessmen, Freelancers, Restaurants, Small Business, Sales Agents, Real Estate	and Insurance agent, SMEs, etc. Note: for more than 30 users in the same company.'
      }
    }
  }[language_code]);
