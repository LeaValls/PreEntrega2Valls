import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    return (
        <div className="count-container">
            <div className="count-controls">
                <div>
                    <Button className="button-Controls" variant="dark" onClick={() => setCount((prevState) => prevState - 1)} disabled={count < 2}> - </Button>
                </div>
                <div className="add-subtract">{count}</div>
                <div>
                    <Button className="button-Controls" variant="dark"  disabled={count === stock} onClick={() => setCount((prevState) => prevState + 1)}> + </Button>
                </div>
            </div>
            <div className="add-to-cart">
                <Button variant="dark" onClick={() => onAdd(count)}>Añadir al carrito</Button>
            </div>

        </div>
    );
};

export default ItemCount;