import React from "react";

const Logo = ({ bloque }) => {
  return (
    <a href="/" className={`${bloque}__logo`}>
      <img src="/img/logo.png" alt="logo" />
      <h2 className={`${bloque}__titulo`}>Dra. Yuleima Pérez</h2>
    </a>
  );
};

export default Logo;
