import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import Button from 'react-bootstrap/Button';
import ItemCount from "../ItemCount";
import "./ItemDetail.css";



function ItemDetail({ product }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);



  function onAddProduct(count) {
    setAdded(count);
    onAdd(product, count);
  }
  console.log (product);

  return (
    <div className="container">
      <div className="detalle">
        <img className="imagenDeDetalle" src={product.image} />
        <div className="descripcion">
          <h1>{product.title}</h1>
        </div>
        <div className="detalleproduct">
          <p>{product.detalle}</p>
        </div>
        <div>
          <h3>Precio: ${product.precio}</h3>
        </div>
        <div>
          <h5 className="stockproduct">Stock: {product.stock}</h5>
        </div>

        <div>
          {added == 0 && <ItemCount stock={product.stock} onAdd={onAddProduct} />}
          <div>
            {added >= 1 && (<Link to="/cart"><Button variant="dark">Terminar Compra</Button></Link>)}
          </div>
        </div>
      </div>
    </div>
  )
}





export default ItemDetail;


