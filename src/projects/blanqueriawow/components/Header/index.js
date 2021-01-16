import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';

const Header = ({ isErrorPage }) => {
  const router = useRouter();
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

  const [onTop, setOnTop] = useState(!(arrayPaths.includes(router.pathname) || isErrorPage));
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              Blanqueria- Wow
            </h1>
          </a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Productos</a>
          </Link>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Contacto</a>
          <button className="site-nav__btn">
            <p>Cuenta</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}
          >
            <form className="search-form">
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)} />
              <input type="text" name="search" placeholder="Enter the product you are looking for" />
            </form>
            <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search" />
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart" />
              {cartItems.length > 0 && <span className="btn-cart__count">{cartItems.length}</span>}
            </button>
          </Link>
          <button onClick={() => setMenuOpen(true)} className="site-header__btn-menu">
            <i className="btn-hamburger">
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
