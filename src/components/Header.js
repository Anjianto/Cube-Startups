import React from "react";
import { Link } from "react-router-dom";

import Logo from "assets/images/logo.svg";
import Button from "elements/Button";

const menuName = ["Home", "Features", "Pricing", "Showcase"];

export default function Header() {
  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <Link to="/">
                <img src={Logo} alt="Cube" width="32" height="32" />
              </Link>
            </h1>
          </div>
          <button
            id="header-nav-toggle"
            className="header-nav-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                {menuName.map((menu, index) => (
                  <li key={index}>
                    <Link to="#">{menu}</Link>
                  </li>
                ))}
              </ul>
              <ul className="list-reset header-nav-right">
                <li>
                  <Button isPrimary isWideMobile isSmall>
                    Sign Up
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
