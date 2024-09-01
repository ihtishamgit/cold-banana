import React from "react";
import navVectorLeft from "../../Assets/Header/nav-vector-left.png";
import headerVectorRight from "../../Assets/Header/header-vector.png";

const Header = () => {
  return (
    <>
      <img
        className="nav-vector-left"
        src={navVectorLeft}
        alt="nav-vector-left"
      />
      <img
        className="header-vector-right"
        src={headerVectorRight}
        alt="header-vector"
      />
      <header className="hero-banner">
        <section className="hero-banner-content">
          <div>Lorem ipsum</div>
          <div>dolor sit amet.</div>
          <button className="read-more-btn cursor-pointer">Read More </button>
        </section>
      </header>
    </>
  );
};

export default Header;
