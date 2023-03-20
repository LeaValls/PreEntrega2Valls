import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import products from "../../mocks/products";

function ItemDetailContainer({id}) {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const productsPromise = new Promise(resolve => setTimeout(() => resolve(products), 2000));

    productsPromise
      .then((response) => {
        const productosFiltrados = response.find ((product) => product.id === parseInt (id));
        setProduct (productosFiltrados);
            
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer;