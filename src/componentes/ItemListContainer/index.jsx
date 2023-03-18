import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => setTimeout(() => resolve(Products), 2000));

    productsPromise
      .then((response) => {
        if(isCategoryRoute) {
          const productosFiltrados = response.filter ((product) => product.category === categoryId);
        setProducts (productosFiltrados);
        } else {
          setProducts (response);
        }        
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;