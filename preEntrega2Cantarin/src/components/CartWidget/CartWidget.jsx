import React from "react";
import estilos from "./cartWidget.module.css";
import logoCart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <div className={estilos.divCartWidget}>
      <img className={estilos.logoCart} src={logoCart} alt="" />
      <span className={estilos.spanCart}>0</span>
    </div>
  );
};
export default CartWidget;
