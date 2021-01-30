const items = [
  {
    id: 1,
    images: ['/bullhorn-solid.svg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 2,
    images: ['/images/products/product-1.jpg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 3,
    images: ['/images/products/product-1.jpg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },

  {
    id: 4,
    images: ['/images/products/product-1.jpg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 5,
    images: ['/images/products/product-1.jpg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 6,
    images: ['/images/products/product-1.jpg'],
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  }
];

const ItemsExplicacion = () => (
  <div className="items">
    <h3>items</h3>
    <div className="left">
      <h4>left</h4>
    </div>
    <div className="right">
      <h4>left</h4>
    </div>
    <style jsx>
      {`
        .items {
          width: 100vw;
          height: 100vh;
        }
        .left,
        .right {
          width: 100%;
          height: 100%;
          flex: 1;
        }
      `}
    </style>
  </div>
);

export default ItemsExplicacion;
