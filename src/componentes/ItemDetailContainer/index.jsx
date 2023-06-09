import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";



function ItemDetailContainer({id}) {
  const [product, setProduct] = useState({});
  


  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    }).catch((error) => console.log({ error }));

  }, []);


  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer;