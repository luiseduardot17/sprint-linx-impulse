import React from "react";
import Button from "../Button/Button";
import S from "./Header.module.css";

const Header = () => {
  return (
    <div className={S.header}>
      <h2>Uma seleção de produtos</h2>
      <h1>especial para você</h1>
      <p>
        Todos os produtos desta lista foram selecionados a partir de sua
        navegação. Aproveite!
      </p>
      <nav className={S.navbar}>
        <Button texto="Conheça a Linx" />
        <Button texto="Ajude o algoritimo" />
        <Button texto="Seus produtos" />
        <Button texto="Compartilhe" />
      </nav>
    </div>
  );
};

export default Header;
