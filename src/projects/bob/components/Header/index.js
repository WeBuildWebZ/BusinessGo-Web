import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';

const Header = ({ isErrorPage }) => {
  const router = useRouter();
<<<<<<< HEAD
  const arrayPaths = [];
=======
  const cartItems = useSelector(state => state.cartItems);
  const arrayPaths = [
    '/products',
    '/products/[product_id]',
    '/login',
    '/cart',
    '/carts/[cart_id]',
    '/register',
    '/cart/checkout'
  ];
>>>>>>> 999910e3687007923d988a10278e1affb36fe937

  const [onTop, setOnTop] = useState(!(arrayPaths.includes(router.pathname) || isErrorPage));
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <Logo />
              Construcciones - Pilar
            </h1>
          </a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
         
        </nav>

        <div className="icons">
             <a href="https://www.facebook.com/piscinas.dehormigon.902" target="_blank"><i className="icon-facebook size" ></i></a>
             <a href="#"><i className="icon-linkedin size"></i></a>
            <a href="https://www.instagram.com/piscinasdehormigo/" target="_blank"><i className="icon-instagram size"></i></a>
             <a href="#"><i className="icon-youtube-play size"></i></a>

             <style jsx>{`
             .icons{
              margin-left:auto;
             }
             .size{
               font-size:1.2em;
               margin:3px;
             }
             `}</style>
        </div>
      </div>
    </header>
  );
};

export default Header;
