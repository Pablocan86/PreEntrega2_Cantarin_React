import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import estilos from "../ItemListContainer/itemListContainer.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div className={estilos.itemListContainer}>
      <h1>{greeting}</h1>
      <div className={estilos.itemList}>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
