import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import S from "./Estoque.module.css";

const Estoque = () => {
  const [produto, setProduto] = useState("");
  const [infos, setInfos] = useState("");

  // function handleProduto() {
  //   setProduto(target.value);
  // }

  async function handleReq() {
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;

    const request = await fetch(url);
    const json = await request.json();
    setProduto(json.products);

    console.log(produto);
  }

  useEffect(() => {
    handleReq();
  }, []);

  return (
    <section className={S.section}>
      <div>
        <h2 className={S.titulo}>Sua Seleção especial</h2>
      </div>

      <div className={S.estoque}>
        {produto.map((produto, index) => {
          return (
            <Card
              key={index}
              imagem={produto.image}
              nome={produto.name}
              desc={produto.description}
              valorAntigo={produto.oldPrice}
              valorAtual={produto.price}
              vezesParcela={produto.installments.count}
              valorParc={produto.installments.value}
            />
          );
        })}
      </div>
      <div className={S.containerBtn}>
        <button className={S.btn} onClick={handleReq}>
          Ainda mais produtos aqui!
        </button>
      </div>
    </section>
  );
};

export default Estoque;
