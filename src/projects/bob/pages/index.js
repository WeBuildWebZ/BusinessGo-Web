import Link from 'next/link';

import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

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
            <h3>Todos Nuestros Trabajos.</h3>
            <Link href="/galeria">
              <button className="btn btn--rounded">Ver Galeria</button>
            </Link>
          </div>
        </article>

        <article
          style={{ backgroundImage: 'url(/images/featured-2.jpg)' }}
          className="featured-item featured-item-small-first"
        >
          <div className="featured-item__content" />
        </article>

        <article
          style={{ backgroundImage: 'url(/images/featured-3.jpg)' }}
          className="featured-item featured-item-small"
        >
          <div className="featured-item__content" />
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>Por qué Elegirnos?</h4>
        </header>

        <ul className="shop-data-items">
          <li>
            <i className="icon-shipping" />
            <div className="data-item__content">
              <h4>Viajamos a todo el pais.</h4>
              <p>Tenemos movilidad propia para todas nuestras herramientas,maquinas,etc.</p>
            </div>
          </li>

          <li>
            <i className="icon-cash" />
            <div className="data-item__content">
              <h4>Presupuesto Libre</h4>
              <p>Podes contactarme a travez de mis redes, me contas lo queres y te presupuesto.</p>
            </div>
          </li>

          <li>
            <i className="icon-materials" />
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
);

export default IndexPage;
