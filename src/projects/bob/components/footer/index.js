import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo />Construcciones - Pilar</h6>
            <p>Somos una empresa Argentina, dedicada a la construccion de piscinas de hormigon, tambien reparamos.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/piscinas.dehormigon.902" target="_blank" rel="noopener"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/piscinasdehormigo/" target="_blank" rel="noopener"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
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
  )
};


export default Footer