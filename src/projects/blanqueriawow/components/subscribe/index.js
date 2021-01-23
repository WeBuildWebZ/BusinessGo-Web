import { useEffect, useState } from 'react';

import { showForm } from '../../../../services/api/form';
import { PROJECT_CODE } from '../../constants';

const Subscribe = () => {
  const [suscriptionForm, setSuscriptionForm] = useState(null);

  useEffect(() => {
    showForm(PROJECT_CODE, 'email_subscription_config').then(({ data: givenForm }) => {
      setSuscriptionForm(givenForm);
    });
  }, []);

  console.log('suscriptionForm', suscriptionForm);

  return (
    <section className="subscribe">
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
          <h4>Suscribite a nuestra tienda Online, y recibi ofertas todas las semanas!</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Correo electrénico" />
            <button type="submit" className="btn btn--rounded btn--yellow">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
