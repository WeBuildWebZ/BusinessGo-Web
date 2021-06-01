import { useEffect, useState } from 'react';

const PrivacyPolicy = () => (
  <div className="privacyPolicy">
    <div className="container">
      <br />
      <br />
      <br />
      {/* <h2>Aviso de Privacidad</h2>
      <p>Revisa las cláusulas de nuestro servicio</p>
      <h5>
        Aviso dirigido a los titulares de datos personales que obran en posesión de XXXXXXX (Miniweb México)
      </h5>
      <p>
        XXXXXXXX (Miniweb), con domicilio en Senda de la Inspiración No. XX, Colonia Milenio III. C.P. XXXXX,
        en Querétaro, Querétaro, hace de su conocimiento que los datos personales de usted, incluyendo los
        sensibles, que actualmente o en el futuro obren en nuestras bases de datos, serán tratados y/o
        utilizados por: <b>Miniweb México</b> y/o las empresas controladoras de ésta última y/o nuestras
        empresas filiales y/o subsidiarias y/o aquellos terceros que, por la naturaleza de sus trabajos o
        funciones tengan la necesidad de tratar y/o utilizar sus datos personales; con el propósito de cumplir
        aquellas obligaciones que se derivan de la relación jurídica existente entre usted como titular de los
        datos personales y las empresas antes señaladas.
        <br />
        Así mismo, <b>Miniweb México</b>, podrá utilizar esos datos para ponernos en contacto con usted, con
        objeto de realizar estudios de mercado o para comunicarle información comercial que pensamos podría
        ser de especial interés para usted. En estos últimos casos, tiene el derecho de excluirse de nuestro
        grupo de receptores de dichas comunicaciones comerciales directas o estudios de mercado. Asimismo,{' '}
        <b>Miniweb México</b>, podrá utilizar el logotipo, nombre y/o colores corporativos dentro de
        promocionales, correos electrónicos, publicaciones digitales o cualquier otro tipo de difusión masiva,
        con el único objeto de dar a conocer a las empresas que conforman nuestra base de datos de clientes.{' '}
        <br />
        <b>Miniweb México</b>, no transferirá a terceros distintos los datos personales que nos proporcione
        sin ponerlo antes en su conocimiento y obtener su permiso por escrito. Asimismo, solicitaremos su
        consentimiento antes de compartir sus datos con terceros, distintos a los señalados que no actúen por
        cuenta nuestra, en términos de lo dispuesto por la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares (la Ley). Los titulares podrán ejercer los derechos que les confiere la
        Ley, a partir del 6 de enero de 2012, mediante una solicitud por escrito, que deberá ser presentada en
        el domicilio de <b>Miniweb México</b>, que se indica en el presente Aviso de Privacidad. Todas las
        solicitudes que sean presentadas a <b>Miniweb México</b>, independiente del medio utilizado por los
        titulares, deberán:
        <ul>
          <li>
            Incluir el nombre y firma autógrafa del titular, así como un domicilio u otro medio para
            comunicarle la respuesta a su solicitud.
          </li>
          <li>Acompañar los documentos oficiales que acrediten la identidad del titular.</li>
          <li>
            Incluir una descripción clara y precisa de los datos personales respecto de los cuales ejercitará
            los derechos que les confiere la Ley.
          </li>
          <li>
            Incluir cualquier elemento o documento que facilite la localización de los datos personales de que
            se traten.
          </li>
        </ul>
        <b>Miniweb México</b>, se reserva el derecho de cambiar, modificar, complementar y/o alterar el
        presente aviso, en cualquier momento, en cuyo caso se hará de su conocimiento a través de cualquiera
        de los medios que establece la legislación en la materia.
        <br />
        <b>Aviso sobre el uso de cookies por parte de Miniweb México</b>: En <b>Miniweb México</b>, se
        implementa el uso de «cookies» y otras tecnologías de publicidad para recopilar datos y direcciones
        IP; gracias a ellas podemos entender mejor el comportamiento de nuestros visitantes y ofrecerles
        contenido personalizado, de acuerdo a los servicios y soluciones que brinda <b>Miniweb México</b>. Es
        importante señalar que, de ninguna manera, con el uso de «cookies» se extrae información de su
        computadora que pudiera vulnerar a nuestros clientes y visitantes. En el caso de direcciones IP e
        información personal se sigue el protocolo vigente de uso y protección de datos manejado por{' '}
        <b>Miniweb México</b>.
      </p>
      <hr />
      <h2>TÉRMINOS Y CONDICIONES</h2>
      <h2>Miniweb México</h2>
      <h4>Términos legales</h4>
      <p>
        Contrato de “<b>SERVICIO DE INTERPRETACIÓN DE INFORMACIÓN EN MODO WEB</b>” que celebran por una parte
        XXXXXX XXXX XXXXX, a quien en lo sucesivo se le denominara “Miniweb México” y por la otra, la persona
        moral o física que adquirió los productos y/o servicios de « Miniweb México», a quien en lo sucesivo
        se le denominará “El Cliente”, al tenor de las siguientes:
      </p>
      <h4>Cláusulas</h4>
      <ul>
        <ol>
          <h4>Primera .- Objeto</h4>
          <p>
            El objeto del presente Contrato, consiste en definir los términos y condiciones bajo los cuales
            “Miniweb México” presta, comercializa y brinda el “
            <b>SERVICIO DE INTERPRETACIÓN DE INFORMACIÓN DIGITAL EN FORMATO WEB</b>” en favor de “
            <b>EL CLIENTE</b>”. Por lo que “<b>EL CLIENTE</b>” manifiesta que todos los datos asentados en la
            carátula del presente Contrato son ciertos, que ha recibido la información a su completa
            satisfacción respecto del contenido del presente Contrato y por lo tanto, ha comprendido en su
            totalidad los servicios que solicita y la forma en que “Miniweb México” presta el “
            <b>SERVICIO DE INTERPRETACIÓN DE INFORMACIÓN DIGITAL EN FORMATO WEB</b>”, adhiriéndose al presente
            Contrato.
          </p>
        </ol>
        <ol>
          <h4>Segunda .- Reglas de uso de Internet</h4>
          <p>
            El uso de el “<b>SERVICIO DE INTERPRETACIÓN DE INFORMACIÓN DIGITAL EN FORMATO WEB</b>” por parte
            de “<b>EL CLIENTE</b>” implica su aceptación y su conformidad. Manifestando desde este momento,
            tener pleno conocimiento respecto de la naturaleza de la Red Global Internet y sus limitaciones,
            así como sus cualidades técnicas y los tiempos de respuesta para consultar, interrogar o
            transferir datos e información, así como de su entorno legal.
          </p>
        </ol>
      </ul> */}
      {/* <DocViewer documents={[{ uri: '/privacy_policy.doc' }]} /> */}
      <iframe
        className="document"
        title="Privacy policy"
        src={`https://docs.google.com/gview?url=${encodeURIComponent(
          `https://8f432fca9e1c.ngrok.io/privacy_policy.doc`
        )}&embedded=true`}
      />
    </div>
    <style jsx>
      {`
        .privacyPolicy {
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          text-align: justify;
        }
        .container {
        }
        p {
        }
        .document {
          width: 100%;
          height: 100vh;
        }
      `}
    </style>
  </div>
);

export default PrivacyPolicy;
