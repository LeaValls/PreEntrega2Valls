
import ItemCart from "../ItemCart";
import { useParams } from "react-router-dom";




function ItemCart() {
  const {id}=useParams();
  return (
    <div>
      
      <ItemCart />
      
     
    </div>
  );
}

export default ItemCart;