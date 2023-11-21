import React from "react";
import estilos from "../Item/item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, product_name, images, price }) => {
  return (
    <article className={estilos.cardItem}>
      <header className={estilos.headerItem}>
        <h2>{product_name}</h2>
      </header>
      <picture>
        <img className={estilos.imgItem} src={images} alt={product_name} />
      </picture>
      <section>
        <p>Precio: ${price}</p>
      </section>
      <footer className={estilos.cardFooter}>
        <Link to={`/item/${id}`}>Ver Detalle</Link>
      </footer>
    </article>
  );
};

export default Item;
