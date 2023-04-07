
import ItemDetailContainer from "../ItemDetailContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";




function ItemRoot() {

  const [product, setProduct] = useState(null);

  useEffect (() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", "cjXlUyEvEcP2iRkvnc3q");
    getDoc (itemRef).then ((snapshot) =>{
      if (snapshot.exists()){
        setProduct({id:snapshot.id, ...snapshot.data()});

      }
    }) .catch ((error) => console.log ({error}))

   

  }, [])
  const {id}=useParams();
  return (
    <div>
      
      <ItemDetailContainer  product={product}/>
      
     
    </div>
  );
}

export default ItemRoot;