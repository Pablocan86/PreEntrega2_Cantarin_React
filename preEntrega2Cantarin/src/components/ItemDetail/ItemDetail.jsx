import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "../ItemDetail/itemDetail.module.css";
const ItemDetail = ({
  id,
  product_name,
  category,
  price,
  stock,
  detalles,
  images,
}) => {
  return (
    <article className={estilos.cardDetail}>
      <header className={estilos.nameProduct}>
        <h2>{product_name}</h2>
      </header>
      <picture>
        <img src={images} alt={product_name} />
      </picture>
      <section className={estilos.detailProduct}>
        <p>Categoria: {category}</p>
        <p>Detalle: {detalles}</p>
        <p>Precio: $ {price}</p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
