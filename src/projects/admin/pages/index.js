// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Toast } from "react-bootstrap";

// import { getSessions } from "../../services/session";
// import LoadingPage from "../../components/LoadingPage";
// import Navbar from "../../components/Navbar";
// import { clearEmailNotification } from "../../services/user";

// import WelcomeModal from "./WelcomeModal";
// import { setUser } from "./actions/user";
// import getLanguage from "./lang";

export default function LandingPage() {
  return <div>hola</div>;
  const user = useSelector((store) => store.user);
  const language = getLanguage(useSelector((store) => store.language));
  const [loading, setLoading] = useState(true);
  const [emailConfirmedMessage, setEmailConfirmedMessage] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getSessions().then(({ data }) => {
      setLoading(false);
      if (!data.length) return (window.location.href = process.env.LANDING_URL);
      dispatch(setUser(data[0].user));
    });
  }, [dispatch]);

  useEffect(() => {
    if (user && !user.notified_email_confirmed) clearEmailNotification();
  }, [user]);

  const handleCloseEmailConfirmed = () => {
    setEmailConfirmedMessage(false);
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <Navbar />
      Esta es la sección de administración dashboard.dancotll.com
      {user ? (
        !user.email_confirmed ? (
          <WelcomeModal />
        ) : (
          !user.notified_email_confirmed && (
            <>
              <Toast
                show={emailConfirmedMessage}
                onClose={handleCloseEmailConfirmed}
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">
                    {language.emailConfirmed.title}
                  </strong>
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
