import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { deleteSessions } from '../../services/api/session';

import RegisterDropdown from './RegisterDropdown';
import LoginDropdown from './LoginDropdown';
import { getLanguage } from './lang';
import useStyle from './style';

export default function NotLoggedInNavbar() {
  const classes = useStyle();
  const user = useSelector(store => store.user);
  const language = getLanguage(useSelector(store => store.language));

  const goToPanel = () => {
    window.location.href = process.env.DASHBOARD_URL;
  };

  const logout = () => {
    window.location.href = process.env.LANDING_URL;
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.png" width="30" height="30" />
          BusinessGo!
        </Navbar.Brand>

        {user ? (
          <>
            {process.env.PROJECT_NAME !== 'admin' && (
              <Button className={classes.button} onClick={goToPanel}>
                {language.goToPanel}
              </Button>
            )}
            <Button className={classes.button} onClick={logout}>
              {language.logout}
            </Button>
            <Navbar.Collapse>
              <Nav className={`justify-content-end ${classes.userName}`}>
                {user.name}
                &nbsp;
                {user.surname}
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <RegisterDropdown />
            <LoginDropdown />
          </>
        )}
      </Navbar>
    </>
  );
}
