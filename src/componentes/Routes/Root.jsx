import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";



function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div>
      
      <ItemListContainer isCategoryRoute={isCategoryRoute}categoryId={params.id}/>
      
    </div>
  );
}

export default Root;
