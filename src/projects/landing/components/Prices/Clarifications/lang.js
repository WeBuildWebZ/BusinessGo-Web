export const getLanguage = langCode =>
  ({
    es: {
      clarifications: 'Aclaraciones',
      items: [
        `Los precios mencionados anteriormente son aproximados. Todo proyecto nuevo tendrá una etapa inicial
        en la que se acordarán y se detallarán los requerimientos a suplir por Webuildwebz. El precio final dependerá
        de la cantidad de horas que lleve dicho requerimiento. El precio por hora que tenemos es de 5 USD
        para clientes fuera de Argentina o 500 pesos argentinos para clientes en Argentina.`,
        `Webuildwebz ofrece Software como Servicio (SAAS).
        Esto implica que Webuildwebz se hará cargo de todos los componentes que forman parte de los proyectos
        (dominio, hosting, código fuente, backend y bases de datos).`,
        `Webuildwebz se hará cargo de todas las fases de desarrollo ya que cuenta
        con los profesionales necesarios para el desarrollo de los sitios web, con lo cual no habrá colaboradores externos
        a Webuildwebz que participen el los proyectos.`,
        `Los pagos se realizarán en etapas: luego de cotizar un proyecto, los pagos se dividirán en etapas.
        Cada etapa va a tener un alcance específico. Al final de cada etapa se hará una demostración al cliente
        del trabajo realizado, procederá a realizar el pago y luego continuará la siguiente etapa.`
      ]
    },
    en: {
      clarifications: 'Clarifications',
      items: [
        `The prices mentioned above are approximate. Every new project will have an initial stage
        in which the requirements to be met by Webuildwebz will be agreed and detailed. The final price will depend
        of the number of hours that this requirement takes. The price per hour we have is 5 USD
        for clients outside of Argentina or 500 Argentine pesos for clients in Argentina.`,
        `Webuildwebz offers Software as a Service (SAAS).
        This implies that Webuildwebz will take care of all the components that are part of the projects
        (domain, hosting, source code, backend and databases).`,
        `Webuildwebz will take care of all development phases since it has
        with the professionals necessary for the development of the websites, with which there will be no external collaborators
        to Webuildwebz that they participate in the projects.`,
        `Payments will be made in stages: After a project is listed, payments will be divided into stages.
        Each stage will have a specific scope. At the end of each stage a demonstration will be made to the client
        of the work done, proceed to make the payment and then continue to the next stage.`
      ]
    }
  }[langCode]);
