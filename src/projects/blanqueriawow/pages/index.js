import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Link from 'next/link';

const IndexPage = () => (
  <Layout>
    <PageIntro />

    <section className="featured">
      <div className="container">
        <article
          style={{ backgroundImage: 'url(/images/featured-1.jpg)' }}
          className="featured-item featured-item-large"
        >
          <div className="featured-item__content">
            <h3>Artículos recién llegados</h3>
            <Link href="/products">
              <a className="btn btn--rounded">Mostrar Colección</a>
            </Link>
          </div>
        </article>

        <article
          style={{ backgroundImage: 'url(/images/featured-2.jpg)' }}
          className="featured-item featured-item-small-first"
        >
          <div className="featured-item__content">
            <h3>Juego de sábanas simple</h3>
            <a href="/products?search=sabana" className="btn btn--rounded">
              Más detalles
            </a>
          </div>
        </article>

        <article
          style={{ backgroundImage: 'url(/images/featured-3.jpg)' }}
          className="featured-item featured-item-small"
        >
          <div className="featured-item__content">
            <h3>Este invierno</h3>
            <a href="/products?search=acolchado" className="btn btn--rounded">
              Más detalles
            </a>
          </div>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>Por qué elegirnos?</h4>
        </header>

        <ul className="shop-data-items">
          <li>
            <i className="icon-shipping" />
            <div className="data-item__content">
              <h4>Entregas a todo el país.</h4>
              <p>Utilizamos encomiendas como Vía Cargo, expreso Bahía, etc.</p>
            </div>
          </li>

          <li>
            <i className="icon-payment" />
            <div className="data-item__content">
              <h4>Medios de pago Seguros</h4>
              <p>Podés utilizar , Mercado Pago, Paypal entre otros.</p>
            </div>
          </li>

          <li>
            <i className="icon-cash" />
            <div className="data-item__content">
              <h4>compra Transparente</h4>
              <p>Derribamos cualquier piratería, y/o compras fraudulentas por facebook.</p>
            </div>
          </li>

          <li>
            <i className="icon-materials" />
            <div className="data-item__content">
              <h4>Calidad Premium</h4>
              <p>Nuestros precios y calidad van de la mano, es cuestión de que lo veas!</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    {/* <ProductsFeatured /> */}
    <Subscribe />
    <Footer />
  </Layout>
);

export default IndexPage;
