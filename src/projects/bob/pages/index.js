import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Link from 'next/link';


<<<<<<< HEAD
const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
            <h3>Todos Nuestros Trabajos.</h3>
            <Link href="/galeria">
              <button className="btn btn--rounded">Ver Galeria</button>
            </Link>
            </div>
          </article>

          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content"></div>
          </article>

          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content"></div>
          </article>
        </div>
      </section>
=======
const IndexPage = () => (
  <Layout>
    <PageIntro />

    {/* LEAN- si yo te digo es Carnaval- vos apreta el pomo */}
    <section className="featured">
      <div className="container">
        <article
          style={{ backgroundImage: 'url(/images/featured-1.jpg)' }}
          className="featured-item featured-item-large"
        >
          <div className="featured-item__content">
            <h3>Articulos recien llegados</h3>
            <a href="#" className="btn btn--rounded">
              Mostrar Coleccion
            </a>
          </div>
        </article>

        <article
          style={{ backgroundImage: 'url(/images/featured-2.jpg)' }}
          className="featured-item featured-item-small-first"
        >
          <div className="featured-item__content">
            <h3>Juego de sabanas simple</h3>
            <a href="#" className="btn btn--rounded">
              Mas detalles
            </a>
          </div>
        </article>
>>>>>>> 999910e3687007923d988a10278e1affb36fe937

        <article
          style={{ backgroundImage: 'url(/images/featured-3.jpg)' }}
          className="featured-item featured-item-small"
        >
          <div className="featured-item__content">
            <h3>Este invierno</h3>
            <a href="#" className="btn btn--rounded">
              Mas detalles
            </a>
          </div>
        </article>
      </div>
    </section>

<<<<<<< HEAD
          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Viajamos a todo el pais.</h4>
                <p>Tenemos movilidad propia para todas nuestras herramientas,maquinas,etc.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Presupuesto Libre</h4>
                <p>Podes contactarme a travez de mis redes, me contas lo queres y te presupuesto.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Tiempo y forma</h4>
                <p>Trabajamos de manera responsable, respetando el tiempo establecido.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </Layout>
  )
}
=======
    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>Por qué elegirnos?</h4>
        </header>

        <ul className="shop-data-items">
          <li>
            <i className="icon-shipping" />
            <div className="data-item__content">
              <h4>Entregas a todo el pais.</h4>
              <p>Utilizamos encomiendas como Via Cargo, expreso Bahia, etc.</p>
            </div>
          </li>

          <li>
            <i className="icon-payment" />
            <div className="data-item__content">
              <h4>Medios de pago Seguros</h4>
              <p>Podes utilizar , Mercado Pago, Paypal entre otros.</p>
            </div>
          </li>

          <li>
            <i className="icon-cash" />
            <div className="data-item__content">
              <h4>compra Transparente</h4>
              <p>Derribamos cualquier pirateria, y/o compras fraudulentas por facebook.</p>
            </div>
          </li>

          <li>
            <i className="icon-materials" />
            <div className="data-item__content">
              <h4>Calidad Premium</h4>
              <p>Nuestros precios y calidad van de la mano, es cuestion de que lo veas!</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
>>>>>>> 999910e3687007923d988a10278e1affb36fe937

    {/* <ProductsFeatured /> */}
    <Subscribe />
    <Footer />
  </Layout>
);

export default IndexPage;
