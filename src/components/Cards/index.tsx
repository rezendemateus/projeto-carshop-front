import { IcardData } from "../../interfaces";
import Li from "./styled";

const Cards = ({ children, src, marca, descricao, km, name, ano, preco, siglaNanme, onClick }: IcardData) => {

  return (
    <Li onClick={onClick}>
      {children}

      <div className="teste">
        <img src={src} alt="" />
      </div>
      <section>
        <h2 className="heading-7-600">{marca}</h2>

        <p>{descricao} </p>
      </section>

      <article>
        <article>{siglaNanme}</article> <span>{name}</span>
      </article>

      <div>
        <div>
          <div> {km} KM</div>
          <div>{ano} </div>
        </div>
        <strong>R$ {preco}</strong>
      </div>
    </Li>
  );
};

export default Cards;
