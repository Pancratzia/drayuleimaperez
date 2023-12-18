import React from "react";

const Logo = ({ bloque }) => {
  return (
    <a href="/" className={`${bloque}__logo`}>
      <picture>
        <source srcSet="/img/logo.avif" type="image/avif" />
        <source srcSet="/img/logo.webp" type="image/webp" />
        <img src="/img/logo.png" alt="logo" width={"auto"} height={"auto"} />
      </picture>
      <h2 className={`${bloque}__titulo`}>Dra. Yuleima Pérez</h2>
    </a>
  );
};

export default Logo;
