import React from "react";
import "./itemCart.css";
import { context } from "../../context";


const ItemCart = ({product})=>{
    const {removeItem} = context ();

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.name} />
            <div>
                <p>Nombre: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.precio}</p>
                <p>Total: ${product.quantity * product.precio} </p>
                <Button onClick={() => removeItem(product.id)} >Eliminar</Button>
            </div>
        </div>
    )
}

export default ItemCart