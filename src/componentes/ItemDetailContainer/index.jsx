import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import products from "../../mocks/products";
function ItemDetailContainer({ }) {
  const [product, setProduct] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    const productsPromise = new Promise(resolve => setTimeout(() => resolve(products), 2000));

    productsPromise
      .then((response) => {
        const productosFiltrados = response.find ((product) => product.id === parseInt (id));
        setProduct (productosFiltrados);
            
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer;