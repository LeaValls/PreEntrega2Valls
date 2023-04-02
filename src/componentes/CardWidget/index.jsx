import { useContext } from "react";
import "./cardwidget.css";
import { Context } from "../../context";
import bolsa from "../../assets/images/bolsa2.png"
import Button from 'react-bootstrap/Button';


function CardWidget(){
    const {productsAdded}=useContext(Context);

    return (
    <Button className="carrito" variant="light">
        <img src={bolsa} /> 
        {productsAdded.length}
        
    </Button>
    )
}

export default CardWidget;