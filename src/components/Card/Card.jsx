import React from "react";
import Button from "../Button/Button";
import S from "./Card.module.css";

const Card = ({
  imagem,
  nome,
  desc,
  valorAntigo,
  valorAtual,
  vezesParcela,
  valorParc,
}) => {
  return (
    <div className={S.card}>
      <div className={S.containerImage}>
        <img src={imagem} />
      </div>
      <h2>{nome}</h2>
      <p>{desc}</p>
      <p>De: R${valorAntigo}</p>
      <h2>
        <strong>Por: R${valorAtual}</strong>
      </h2>
      <p>
        ou {vezesParcela}x de R${valorParc}
      </p>
      <Button texto="Comprar" />
    </div>
  );
};

export default Card;
