import { useEffect, useState } from 'react';

const Navbar = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(window.location.pathname);
  });

  return (
    <div className="navbar">
      <div className="pathName">{text}</div>
      <style jsx>
        {`
          .navbar {
            width: 100%;
            height: 80px;
            background-color: gray;
            border-radius: 10px;
            box-shadow: 0 0 2px 2px gray;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
