import React, { useState } from "react";
import Button from "../Button/Button";
import S from "./Card.module.css";

const Card = () => {
  const [produto, setProduto] = useState("");
  const [infos, setInfos] = useState("");

  function handleProduto(e) {
    setProduto(e.target.value);
  }

  const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;

  async function handleReq() {
    preventDefault();
    const request = await fetch(url);
    const json = await request.json();
    setInfos(json);
  }

  console.log(infos);

  return (
    <div className={S.card}>
      <div className={S.containerImage}>
        <img src={infos ? infos.image : ""} />
      </div>
      <h2>Nome do produto</h2>
      <p>
        Descrição do produto um pouco maior, com duas linhas ou três que explica
        melhor do que se trata.
      </p>
      <p>De: R$23,99</p>
      <h2>
        <strong>Por: R$19,99</strong>
      </h2>
      <p>ou 2x de R$9,99</p>
      <Button texto="Comprar"/>
    </div>
  );
};

export default Card;
