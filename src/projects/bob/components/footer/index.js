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
              <Logo />
              Construcciones - Pilar
            </h6>
            <p>
              Somos una empresa Argentina, dedicada a la construccion de piscinas de hormigon, tambien
              reparamos.
            </p>
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
              <li>Texto de prueba</li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
            </ul>
            <ul>
              <li>Informacion</li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
              <li>
                <a href="#">Texto de prueba</a>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="#">example@gmail.com</a>
              </li>
              <li>
                <a href="#">TEL: 1122334455</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            Diseñado por
            <a href="#">WeBuildWebZ</a>- © 2021 todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
