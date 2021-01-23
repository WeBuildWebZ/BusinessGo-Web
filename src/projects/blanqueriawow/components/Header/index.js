import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';
import Filter from '../products-filter/components/Filter';

const Header = ({ isErrorPage }) => {
  const router = useRouter();
  const cartItems = useSelector(state => state.cartItems);
  const queryParams = useSelector(state => state.queryParams);
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
  const [search, setSearch] = useState(queryParams.search || '');

  useEffect(() => {
    if (arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
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

  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = `/products?search=${encodeURIComponent(search)}`;
  };

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <Logo />
              Blanquería- Wow
            </h1>
          </a>
        </Link>

        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Productos</a>
          </Link>
          {menuOpen && <Filter />}
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}
          >
            <form className="search-form" onSubmit={handleSubmit}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)} />
              <input
                type="text"
                name="search"
                value={search}
                placeholder="Buscá un producto"
                onChange={({ target }) => setSearch(target.value)}
              />
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
