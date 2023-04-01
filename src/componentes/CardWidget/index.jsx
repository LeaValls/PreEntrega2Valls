import { useContext } from "react";
import "./cardwidget.css";
import { Context } from "../../context";
import bolsa from "../../assets/images/bolsa.png"


function CardWidget(){
    const {productsAdded}=useContext(Context);

    return (
    <button className="carrito">
        <img src={bolsa} /> 
        {productsAdded.length}
        
    </button>
    )
}

export default CardWidget;