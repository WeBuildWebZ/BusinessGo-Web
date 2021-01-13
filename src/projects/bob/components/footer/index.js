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
<<<<<<< HEAD
            <h6><Logo />Construcciones - Pilar</h6>
            <p>Somos una empresa Argentina, dedicada a la construccion de piscinas de hormigon, tambien reparamos.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/piscinas.dehormigon.902" target="_blank" rel="noopener"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/piscinasdehormigo/" target="_blank" rel="noopener"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
=======
            <h6>
              <Logo /> <span>E</span>-Shop
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
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
<<<<<<< HEAD
              <li>Texto de prueba</li>
              <li><a href="#">Texto de prueba</a></li>
              <li><a href="#">Texto de prueba</a></li>
              <li><a href="#">Texto de prueba</a></li>
              
            </ul>
            <ul>
              <li>Informacion</li>
              <li><a href="#">Texto de prueba</a></li>
              <li><a href="#">Texto de prueba</a></li>
              <li><a href="#">Texto de prueba</a></li>
       
            </ul>
            <ul>
              <li>Contacto</li>
              <li><a href="#">example@gmail.com</a></li>
              <li><a href="#">TEL: 1122334455</a></li>
=======
              <li>Shopping online</li>
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
                <a href="#">blanqueria-wow@gmail.com</a>
              </li>
              <li>
                <a href="#">TEL: +15 1122334455</a>
              </li>
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Diseñado por 
          <a href="#">DancotLL</a>
           - © 2021 todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
