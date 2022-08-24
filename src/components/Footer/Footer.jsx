import React from "react";
import S from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <h6>Testando as habilidades em React</h6>
      <h6>Luis Eduardo</h6>
      <a href="https://github.com/luiseduardot17" target="_blank" rel="noopener noreferrer">Meu github</a>
      <h6>Linx Impulse</h6>
      <h6>2022</h6>
    </footer>
  );
};

export default Footer;
