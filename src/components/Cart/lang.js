export const getLanguage = language_code =>
  ({
    es: {
      cartIsEmpty: (
        <div>
          No tienes nada en el carrito, ve a <a href="/productos">Productos</a> para ver nuestros increíbles
          productos!
        </div>
      )
    },
    en: {
      cartIsEmpty: (
        <div>
          Your cart is empty, go to <a href="/productos">Products</a> to see our incredible products!
        </div>
      )
    }
  }[language_code]);
