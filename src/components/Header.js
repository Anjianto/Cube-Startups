import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "assets/images/logo.svg";
import Button from "elements/Button";

const menuName = ["Home", "Features", "Pricing", "Showcase"];

export default function Header() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const buttonToggle = document.getElementById("header-nav-toggle");
    const nav = document.getElementById("header-nav");
    if (active) {
      buttonToggle.addEventListener("click", () => {
        nav.classList.add("is-active");
        nav.style.maxHeight = "292px";
        document.body.classList.add("off-nav-is-active");
      });
    } else {
      buttonToggle.addEventListener("click", () => {
        nav.classList.remove("is-active");
        nav.style.maxHeight = "auto";
        document.body.classList.remove("off-nav-is-active");
      });
    }
  }, [active]);

  return (
    <header className="site-header reveal-from-bottom" data-aos="fade-down">
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
            onClick={() => (active ? setActive(false) : setActive(true))}
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
