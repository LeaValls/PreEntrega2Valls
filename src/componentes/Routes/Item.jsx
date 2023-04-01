
import ItemDetailContainer from "../ItemDetailContainer";
import { useParams } from "react-router-dom";




function ItemRoot() {
  const {id}=useParams();
  return (
    <div>
      
      <ItemDetailContainer  id={id}/>
      
     
    </div>
  );
}

export default ItemRoot;