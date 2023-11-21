import React from "react";
import { useState } from "react";
import estilos from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={estilos.counter}>
      <div className={estilos.controls}>
        <button className={estilos.button} onClick={decrement}>
          -
        </button>
        <h4 className={estilos.number}>{quantity}</h4>
        <button className={estilos.button} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className={estilos.buttonAgregar}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
