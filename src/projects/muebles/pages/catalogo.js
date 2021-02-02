import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import Footer from '../components/footer';
import { Banner } from '../components/banner';
import { Tags } from '../components/tags';
import Slide from '../components/slider';
import Layout from '../Layout';
import Identidad from '../components/identidad';
import LogoContainer from '../components/navbar/logo-container';

const fitments = [
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://http2.mlstatic.com/D_NQ_NP_820814-MLA41255457368_032020-O.webphttps://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_628787-MLA40468696041_012020-O.webp',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://d26lpennugtm8s.cloudfront.net/stores/969/202/products/9x3a68331-4b031864410b6b994815989056071594-1024-1024.jpg',
    description: '.Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_828965-MLA30054369593_042019-O.webp',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_787386-MLA41248063299_032020-O.webp',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500,
    url: 'https://zanle-group.vercel.app/'
  },
  {
    title: 'Nombre de Mueble',
    image_url: 'https://http2.mlstatic.com/D_NQ_NP_692351-MLA31882441750_082019-O.webp',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://d26lpennugtm8s.cloudfront.net/stores/243/765/products/pic_20190327_223523-e7994f0bdb08a4e60c15537369940282-1024-1024.jpg',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://previews.123rf.com/images/iimages/iimages1301/iimages130100796/17338948-ilustraci%C3%B3n-de-los-muebles-de-madera-en-un-fondo-blanco.jpg',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url: 'https://www.megatone.net/Images/Articulos/zoom2x/131/MUE8140MAM.jpg',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7707070835992_armariomaltabaja.jpg',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://http2.mlstatic.com/tolva-mueble-canasto-organizador-madera-estantes-blanco-bano-D_Q_NP_946083-MLA31125022842_062019-F.webp',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  },
  {
    title: 'Nombre de Mueble',
    image_url:
      'https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/Muebles_de_madera_maciza_2.jpg',
    description: 'Mueble de madera, esperando una descripcion del dueño, y su foto real jaja',
    price: 500
  }
];

const Catalogo = () => {
  const [selectedFitment, setSelectedFitment] = useState(null);

  return (
    <>
      <LogoContainer />
      <Layout>
        <div className="galery">
          <Modal show={!!selectedFitment} onHide={() => setSelectedFitment(null)}>
            <Modal.Header closeButton>{selectedFitment?.title}</Modal.Header>
            <Modal.Body>
              {selectedFitment?.description}
              <img className="modalImage" src={selectedFitment?.image_url} alt="" />
            </Modal.Body>
          </Modal>
          <h2>Bienvenido/a</h2>
          <h4>
            Esta es nuestra galeria de todos los muebles que podras ver, consultame hasta donde es nuestro
            radio de entrega.
          </h4>
          <br />
          {fitments.map(({ title, image_url, description, price }, id) => (
            <li className="card" key={id}>
              <div className="top">
                <img
                  className="cardImage"
                  src={image_url}
                  alt=""
                  onClick={() => setSelectedFitment({ id, title, image_url, description, price })}
                />
              </div>
              <div className="mid">
                {description}
                <h4>{price}$</h4>
              </div>

              <div
                className="bottom"
                onClick={() => setSelectedFitment({ id, image_url, description, price })}
              >
                <a href="#">Ver</a>
              </div>
            </li>
          ))}

          <style jsx>
            {`
              .galery {
                width: 100vw;
                padding: 2em;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
              }
              h2 {
                width: 100vw;
                text-align: center;
              }
              // ===========================================================================
              .card {
                width: 300px;
                height: 400px;
                border: 0.5em solid #ebebeb;
                border-radius: 1em;
                padding: 1em;
                margin: 0.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column;
                transition: 0.7s;
              }
              .card:hover {
                border: 0.5em solid silver;
                box-shadow: 0.3em 0.3em 0.5em grey;
              }
              // ======================================================================================
              .top {
                flex: 5;
                width: 100%;
                height: 100%;
              }
              .cardImage {
                width: 96%;
                margin-left: 2%;
                height: 196px;
                border-radius: 0.5em;
                object-fit: cover;
                transition: 0.7s;
                cursor: pointer;
              }
              .cardImage:hover {
                border-radius: 0.8em;
                box-shadow: 0 0 5px;
                transform: scale(1.1);
              }
              .modalImage {
                max-width: 100%;
                border-radius: 0.5em;
              }
              // ======================================================================================
              .mid {
                flex: 4;
                width: 100%;
                height: 100%;
                margin: 0.5em 0;
              }
              // =======================================================================================
              .bottom {
                flex: 1;
                width: 100%;
                height: 100%;
                background: #f8ac30;
                border-radius: 0.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
              }
              a {
                color: black;
                transition: 0.7s;
              }
              a:hover {
                color: white;
                cursor: pointer;
                transform: scale(1.1);
              }
            `}
          </style>
        </div>
      </Layout>
    </>
  );
};

export default Catalogo;
