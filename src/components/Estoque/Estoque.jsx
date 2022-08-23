import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import S from "./Estoque.module.css";

const Estoque = () => {
  const [produto, setProduto] = useState([]);
  const [page, setPage] = useState(1);

  async function handleReq() {
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;

    const response = await fetch(url);
    const json = await response.json();
    setProduto([...produto, ...json.products]);
    setPage("");
  }

  function addPage() {
    setPage(page + 1);
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
        <button className={S.btn} onClick={addPage}>
          Ainda mais produtos aqui!
        </button>
      </div>
    </section>
  );
};

export default Estoque;
