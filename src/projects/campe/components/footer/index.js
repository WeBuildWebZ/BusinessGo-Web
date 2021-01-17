import { useSelector } from 'react-redux';

import Logo from '../../assets/icons/logo';
import Spinner from '../../../../components/Spinner';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Cosmetics</span>-Beauty
            </h6>
            {!project && <Spinner />}
            {project && <p>{project.configuration.description}</p>}
            <ul className="site-footer__social-networks">
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.facebook_url} target="blank">
                    <i className="icon-facebook" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.twitter_url} target="blank">
                    <i className="icon-twitter" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.linkedin_url} target="blank">
                    <i className="icon-linkedin" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.instagram_url} target="blank">
                    <i className="icon-instagram" />
                  </a>
                )}
              </li>
              <li>
                {!project && <Spinner />}
                {project && (
                  <a href={project.configuration.youtube_url} target="blank">
                    <i className="icon-youtube-play" />
                  </a>
                )}
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Cosmetics - Beauty</li>
              <li>
                <a href="#">Como comprar</a>
              </li>
              <li>
                <a href="#">Envio por encomienda</a>
              </li>
              <li>
                <a href="#">Metodos de Pago</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
            <ul>
              <li>Informacion</li>
              <li>
                <a href="#">Descuentos</a>
              </li>
              <li>
                <a href="#">Buscar un articulo</a>
              </li>
              <li>
                <a href="#">Suscripciones</a>
              </li>
              <li>
                <a href="#">Compartir</a>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="#">Cosmeticos-beauty@gmail.com</a>
              </li>
              <li>
                <a href="#">TEL: +15 1122334455</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Diseñado por DancotLL - © 2021 todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
