import React, { useState } from "react";
import Card from "../Card/Card";
import S from "./Estoque.module.css";

const Estoque = () => {
  const [produto, setProduto] = useState("");
  const [infos, setInfos] = useState("");

  function handleProduto(e) {
    setProduto(e.target.value);
  }

  const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;

  async function handleReq(e) {
    e.preventDefault();
    const request = await fetch(url);
    const json = await request.json();
    setInfos(json);
  }

  console.log(infos);


  return (
    <section className={S.section}>
        <div>
        <h2 className={S.titulo}>Sua Seleção especial</h2>
        </div>
        
      <div className={S.estoque}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
      <div className={S.containerBtn}>
        <button className={S.btn} onClick={handleReq}>Ainda mais produtos aqui!</button>
      </div>
    </section>
  );
};

export default Estoque;
