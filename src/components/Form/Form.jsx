import React from "react";
import S from "./Form.module.css";

const Form = () => {
  return (
    <div className={S.container}>
      <article className={S.article}>
        <h2>Ajude o algorítimo a ser mais certeiro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p>
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </article>
      <form className={S.form}>
        <label htmlFor="name" className={S.label}>
          Seu nome:
        </label>
        <input type="text" id="name" name="name" className={S.input}></input>
        <label htmlFor="email" className={S.label}>
          E-mail:
        </label>
        <input type="email" id="email" name="email" className={S.input}></input>
        <label htmlFor="cpf" className={S.label}>
          CPF:
        </label>
        <input type="text" id="cpf" name="cpf" className={S.input}></input>
        <div className={S.contSelect}>
          <input
            type="radio"
            id="masculino"
            name="gender"
            value="Masculino"
          ></input>
          <label htmlFor="masculino">Masculino</label>
          <input
            type="radio"
            id="feminino"
            name="gender"
            value="Feminino"
          ></input>
          <label htmlFor="feminino">Feminino</label>
        </div>
        <input type="submit" value="Enviar" className={S.btnInput}></input>
      </form>
    </div>
  );
};

export default Form;
