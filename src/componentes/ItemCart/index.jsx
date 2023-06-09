import { useContext } from "react";
import { Context } from "../../context";
import "./ItemCart.css";


export const CartItem = ({ product }) => {
  
  const { removeItem } = useContext(Context);

  return (
    <div className="container">
      <div className="cartItem-container">
        <img className="cartItem-img" src={product.img} alt={product.name} />
        <div className="cartItem-info">
          <div className="cartItem-title">{product.name}</div>
          <div className="cartItem-quantityPrice">
            ${product.price.toLocaleString()} x {product.quantity} u = $
            {(product.price * product.quantity).toLocaleString()}
          </div>
        </div>
        <div className="cartItem-options">
          <div onClick={() => removeItem(product)} className="p-5">
            <IoTrashOutline className="trash-icon" />
          </div>
        </div>
      </div>
      <div className="terminarCompra-container "></div>
    </div>
  );
};