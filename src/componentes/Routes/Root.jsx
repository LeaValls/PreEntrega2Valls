import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";
import {useContext} from "react";
import { Context, CustomProvider } from "../../context";



function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  const contextValues = useContext(Context);

  return (
    <CustomProvider>
      
      <ItemListContainer isCategoryRoute={isCategoryRoute}categoryId={params.id}/>
      
    </CustomProvider>
  );
}

export default Root;
