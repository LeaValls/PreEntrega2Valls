import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";
import NavBar from "../NavBar";


function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div>
      <NavBar />;
      <ItemListContainer isCategoryRoute={isCategoryRoute}categoryId={params.id}/>;
      
    </div>
  );
}

export default Root;