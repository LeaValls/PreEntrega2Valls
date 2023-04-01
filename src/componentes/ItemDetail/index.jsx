import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import Button from 'react-bootstrap/Button';
import "./ItemDetail.css";
import { Context } from "../../context";

function ItemDetail({product}) {
  const {onAdd} = useContext(Context);
  const [added, setAdded] = useState (0);

  function onAddProduct (count){
    setAdded(count);
    onAdd(product, count);
  }
    return (
        <div className="container">
      <div className="detalle">
        <img className="imagenDeDetalle" src={product.image} />
        <div className="descripcion">
          <h1>{product.name}</h1>
        </div>
        <div className="detalleproduct">
            <p>{product.detalle}</p>
        </div>
        <div>
            <h3>Precio: {product.Precio}</h3>
        </div>
        <div>
           <h5 className="stockproduct">Stock: {product.Stock}</h5>
        </div>
        <div>
          {added == 0 && <ItemCount stock = {product.Stock} onAdd={onAddProduct}/>}
          <div>
            {added >= 1 &&(<Link to="/cart"><Button variant="dark">Terminar Compra</Button></Link>)}
          </div>
        </div>
      </div>
    </div>
    )
}





export default ItemDetail;


