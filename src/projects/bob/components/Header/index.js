import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../../assets/icons/logo';
import Spinner from '../../../../components/Spinner';

const Header = ({ isErrorPage }) => {
  const router = useRouter();
  const arrayPaths = [];

  const project = useSelector(store => store.project);
  const [onTop, setOnTop] = useState(!(arrayPaths.includes(router.pathname) || isErrorPage));
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    setOnTop(window.pageYOffset === 0);
  };

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

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <Logo />
              {!project && <Spinner />}
              {project && project.configuration.basic_info.title}
            </h1>
          </a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} />

        <div className="icons">
          {!project && <Spinner />}
          {project && (
            <>
              <a href={project.configuration.basic_info.facebook_url} target="_blank">
                <i className="icon-facebook size" />
              </a>
              <a href={project.configuration.basic_info.linkedin_url} target="_blank">
                <i className="icon-linkedin size" />
              </a>
              <a href={project.configuration.basic_info.instagram_url} target="_blank">
                <i className="icon-instagram size" />
              </a>
              <a href={project.configuration.basic_info.youtube_url} target="_blank">
                <i className="icon-youtube-play size" />
              </a>
            </>
          )}

          <style jsx>
            {`
              .icons {
                margin-left: auto;
              }
              .size {
                font-size: 1.2em;
                margin: 3px;
              }
            `}
          </style>
        </div>
      </div>
    </header>
  );
};

export default Header;
