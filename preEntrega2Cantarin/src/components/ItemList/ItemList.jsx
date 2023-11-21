import React from "react";
import estilos from "./itemList.module.css";
import Item from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className={estilos.listGroup}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
