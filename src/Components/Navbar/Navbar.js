import React, { useState } from "react";
import { navLinks } from "../../Constants/Constant";
import hamburgerMenu from "../../Assets/Header/hamburger-menu-512.png";
import close from "../../Assets/Header/close.jpg";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(true);
  return (
    <>
      <nav className="navbar">
        <h1>Chilled grape</h1>
        <i class="fi fi-br-menu-burger"></i>
        {toggleIcon ? (
          <img
            className="hamburger-menu-icon"
            src={hamburgerMenu}
            alt="hamburger Menu Icon"
            onClick={() => setToggleIcon(!toggleIcon)}
          />
        ) : (
          <img
            className="close-icon"
            src={close}
            alt="close icon"
            onClick={() => setToggleIcon(!toggleIcon)}
          />
        )}

        <ul className="topnav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className="cursor-pointer" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
          <button className="btn-small cursor-pointer btn-spacing">
            Login
          </button>
        </ul>
      </nav>
      {/* for mobile */}
      {!toggleIcon && (
        <nav className="navbar-mobile">
          <ul className="topnav mobile-nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="cursor-pointer" href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
            <button className="btn-small cursor-pointer btn-spacing btn-spacing-mobile">
              Login
            </button>
          </ul>
        </nav>
      )}

      {/* for mobile */}
    </>
  );
};

export default Navbar;
