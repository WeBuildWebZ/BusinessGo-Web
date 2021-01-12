import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>E</span>-Shop</h6>
            <p>Somos una empresa Familiar Argentina, radicada en Mar del Plata, y distribuimos a todo el pais.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Como comprar</a></li>
              <li><a href="#">Envio por encomienda</a></li>
              <li><a href="#">Metodos de Pago</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <ul>
              <li>Informacion</li>
              <li><a href="#">Descuentos</a></li>
              <li><a href="#">Buscar un articulo</a></li>
              <li><a href="#">Suscripciones</a></li>
              <li><a href="#">Compartir</a></li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li><a href="#">blanqueria-wow@gmail.com</a></li>
              <li><a href="#">TEL: +15 1122334455</a></li>
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
  )
};


export default Footer