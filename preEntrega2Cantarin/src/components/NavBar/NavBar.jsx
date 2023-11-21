import React from "react";
import logo from "./assets/logo.svg";

import estilos from "./navBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

function hola() {
  console.log("hola");
}
const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
      <div className={estilos.divLogo}>
        <Link to="/">
          <img className={estilos.imagenLogo} src={logo} alt="" />
        </Link>
        <h3>Naufragio Fit</h3>
      </div>
      <div className={estilos.listaCategorias}>
        <NavLink
          to={`/category/Proteina`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Proteinas
        </NavLink>
        <NavLink
          to={`/category/Pre-workout`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Pre Entrenos
        </NavLink>
        <NavLink
          to={`/category/Ganador`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Ganadores
        </NavLink>
        <NavLink
          to={`/category/Quemador`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Quemadores
        </NavLink>
        <NavLink
          to={`/category/Glutamina`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Glutaminas
        </NavLink>
        <NavLink
          to={`/category/Creatina`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Creatinas
        </NavLink>
        <NavLink
          to={`/category/Aminoacidos`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Aminoácidos
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
