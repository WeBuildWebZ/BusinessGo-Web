import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import { clearEmailNotification } from '../../../services/api/user';
import WelcomeModal from '../components/WelcomeModal';

import { getLanguage } from './lang';

export default function LandingPage() {
  const user = useSelector(store => store.user);
  const language = getLanguage(useSelector(store => store.language));
  const [emailConfirmedMessage, setEmailConfirmedMessage] = useState(true);

  useEffect(() => {
    if (user && !user.notified_email_confirmed) clearEmailNotification();
  }, [user]);

  const handleCloseEmailConfirmed = () => {
    setEmailConfirmedMessage(false);
  };

  return (
    <>
      <Navbar />
      Esta es la sección de administración dashboard.dancotll.com
      {user ? (
        !user.email_confirmed ? (
          <WelcomeModal />
        ) : (
          !user.notified_email_confirmed && (
            <>
              <Toast show={emailConfirmedMessage} onClose={handleCloseEmailConfirmed}>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">{language.emailConfirmed.title}</strong>
                  <small>{language.justNow}</small>
                </Toast.Header>
                <Toast.Body>{language.emailConfirmed.message}</Toast.Body>
              </Toast>
            </>
          )
        )
      ) : (
        <></>
      )}
    </>
  );
}
