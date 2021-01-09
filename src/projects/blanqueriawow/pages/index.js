import React from 'react';
import Head from 'next/head';

import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => (
  <Layout>
    <PageIntro />

    {/* LEAN- si yo te digo es Carnaval- vos apreta el pomo */}
    <section className="featured">
      <div className="container">
        <Head>
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
          {/* etiquetas og facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Blanquería Wow" />
          <meta
            property="og:description"
            content="Blanquería Wow, el mejor precio para el confort de tu hogar."
          />
          <meta property="og:image" content="https://blanqueriawow.com/images/page.png" />
          <meta property="og:image:width" content="828" />
          <meta property="og:image:height" content="450" />
          <meta property="og:url" content="https://blanqueriawow.com/" />
          <meta property="og:site_name" content="Blanquería Wow" />
          {/* aditional */}
          <meta name="author" content="Blanquería Wow" />
          <meta name="copyright" content="Blanquería Wow" />
          <meta name="Description" content="Blanquería Wow, el mejor precio para el confort de tu hogar." />
        </Head>
        <PageIntro />
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

    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>Porque Elegirnos?</h4>
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

    <ProductsFeatured />
    <Subscribe />
    <Footer />
  </Layout>
);

export default IndexPage;
