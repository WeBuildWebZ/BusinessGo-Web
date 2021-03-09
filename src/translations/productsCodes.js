export const getProductCodeTranslation = language_code =>
  ({
    es: {
      free: {
        name: 'Tarjeta Digital Gratuita',
        description: 'Para individuos, Freelancers y Estudiantes.',
        templates: {
          free1: { name: 'Free 1', description: 'Template Free 1' },
          free2: { name: 'Free 2', description: 'Template Free 2' },
          free3: { name: 'Free 3', description: 'Template Free 3' },
          free4: { name: 'Free 4', description: 'Template Free 4' }
        }
      },
      premium: {
        name: 'Tarjeta Digital Premium',
        description:
          'Para Empresarios, Freelancers, Restaurantes, Pequeños Negocios, Agentes	de Ventas, Inmobiliarios	y de	Seguros, PyMEs,	etc',
        templates: {
          premium1: { name: 'Premium 1', description: 'Template Premium 1' },
          premium2: { name: 'Premium 2', description: 'Template Premium 2' },
          premium3: { name: 'Premium 3', description: 'Template Premium 3' }
        }
      },
      company: {
        name: 'Tarjeta Digital de Organización',
        description:
          'Para Empresarios, Freelancers, Restaurantes, Pequeños Negocios, Agentes de Ventas, Inmobiliarios y de Seguros, PyMEs, etc. Nota: para + de 30 usuarios misma empresa.',
        templates: {
          company1: { name: 'Company 1', description: 'Template Company 1' },
          company2: { name: 'Company 2', description: 'Template Company 2' },
          company3: { name: 'Company 3', description: 'Template Company 3' }
        }
      }
    },
    en: {
      free: {
        name: 'Free Digital Card',
        description: 'For individuals, Freelancers and Students.',
        templates: {
          free1: { name: 'Free 1', description: 'Template Free 1' },
          free2: { name: 'Free 2', description: 'Template Free 2' },
          free3: { name: 'Free 3', description: 'Template Free 3' },
          free4: { name: 'Free 4', description: 'Template Free 4' }
        }
      },
      premium: {
        name: 'Premium Digital Card',
        description:
          'For Businessmen, Freelancers, Restaurants, Small Business, Sales Agents, Real Estate	and Insurance agent, SMEs, etc.',
        templates: {
          premium1: { name: 'Premium 1', description: 'Template Premium 1' },
          premium2: { name: 'Premium 2', description: 'Template Premium 2' },
          premium3: { name: 'Premium 3', description: 'Template Premium 3' }
        }
      },
      company: {
        name: 'Company Digital Card',
        description:
          'For Businessmen, Freelancers, Restaurants, Small Business, Sales Agents, Real Estate	and Insurance agent, SMEs, etc. Note: for more than 30 users in the same company.',
        templates: {
          company1: { name: 'Company 1', description: 'Template Company 1' },
          company2: { name: 'Company 2', description: 'Template Company 2' },
          company3: { name: 'Company 3', description: 'Template Company 3' }
        }
      }
    }
  }[language_code]);
