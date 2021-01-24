import { useSelector } from 'react-redux';

import Navbar from '../../componentss/navbar';
import Footer from '../../componentss/footer';
import Copyright from '../../componentss/Copyright';
import Breadcrumb from '../../../../components/Breadcrumb';

const Carrito = () => {
  const cartItems = useSelector(store => store.cartItems);

  console.log(cartItems);

  return (
    <>
      <Navbar />
      <Breadcrumb sections={[{ value: 'Carrito', link: '#' }]} />
      <Footer />
      <Copyright />
    </>
  );
};

export default Carrito;
