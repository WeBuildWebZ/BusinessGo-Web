import PropTypes from 'prop-types';
import { useState } from 'react';

const DropDown = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="title">{props.title}</div>
      <style jsx>
        {`
          .dropdown {
            display: flex;
            align-items: center;
            width: 90%;
            height: 50px;
            margin: 4px;
            font-weight: bold;
            background-image: linear-gradient(to top, #000000, #000000 50%, #3e3e3e 100%);
            box-shadow: 0 0 1px 1px #3e3e3e;
            border-radius: 20px;
          }
          .dropdown.open {
            background-image: linear-gradient(to top, #d8d4d4, #d8d4d4 50%, #f0ecec 100%);
            color: #383434;
            border-style: solid;
            border-width: 5px;
            border-color: #ffffff;
            box-shadow: 0 0 1px 1px #ffffff;
          }
          .title {
            margin-left: 21px;
          }
        `}
      </style>
    </div>
  );
};

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default DropDown;
