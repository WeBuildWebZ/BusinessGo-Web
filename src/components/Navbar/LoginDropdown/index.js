import React from 'react';
import { Dropdown } from 'react-bootstrap';

import Toggle from './toggle';
import Menu from './menu';
import useStyle from './style';

export default function LoginDropdown() {
  const classes = useStyle();

  return (
    <Dropdown className={classes.dropdown}>
      <Dropdown.Toggle as={Toggle} id="dropdown-custom-components" />
      <Dropdown.Menu as={Menu} className="dropdown-menu-right" />
    </Dropdown>
  );
}
