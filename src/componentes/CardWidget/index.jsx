import { useContext } from "react";
import "./cardwidget.css";
import { Context } from "../../context";
import bolsa from "../../assets/images/bolsa2.png"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function CardWidget() {
    const { productsAdded } = useContext(Context);

    return (
        <Link to="/cart" style={{ textDecoration: "none", color: "light" }}>
            <Button className="carrito" variant="light">
                <img src={bolsa} />
                {productsAdded.length}

            </Button>
            </Link>
            );
}

            export default CardWidget;