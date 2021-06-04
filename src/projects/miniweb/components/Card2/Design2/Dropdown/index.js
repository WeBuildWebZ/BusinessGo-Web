import PropTypes from 'prop-types';
import { useState } from 'react';

import DropdownButton from './DropdownButton';

const Dropdown = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown${open ? ' open' : ''}`}>
      <DropdownButton title={props.title} open={open} onClick={() => setOpen(!open)} />
      {open && <div className="content">{props.children}</div>}
      <style jsx>
        {`
          .dropdown {
            width: 90%;
          }
          .dropdown.open {
          }
          .content {
            border-radius: 20px;
            background-color: white;
            color: #383434;
            padding: 21px;
          }
        `}
      </style>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Dropdown;
