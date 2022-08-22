import React from "react";
import S from "./SectionEnd.module.css";

const SectionEnd = () => {
  return (
    <section className={S.section}>
      <div className={S.container}>
        <h2 className={S.titulo}>Compartilhe a novidade</h2>
        <p>
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
        </p>
        <form className={S.form}>
          <div className={S.contInput}>
            <div className={S.friendName}>
              <label htmlFor="friendName" className={S.label}>
                Nome do seu amigo:
              </label>
              <input
                type="text"
                id="friendName"
                name="friendName"
                className={S.input}
              ></input>
            </div>
            <div className={S.shareEmail}>
              <label htmlFor="shareEmail" className={S.label}>
                E-mail:
              </label>
              <input
                type="email"
                id="shareEmail"
                name="shareEmail"
                className={S.input}
              ></input>
            </div>
          </div>

          <input
            type="submit"
            value="Enviar agora"
            className={S.btnInput}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default SectionEnd;
