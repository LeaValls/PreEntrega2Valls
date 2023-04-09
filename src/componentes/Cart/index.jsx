import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../../context";
import "./Cart.css";

function CartComponent() {
  const { productsAdded, clearCart,totalItems,totalPrice } = useContext(Context);
  const db = getFirestore();

  function updateOrder(productId, finalStock) {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  }

  function sendOrder() {
    const total = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.precio,
      0
    );



    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, order)
      .then((response) => {
        const orderId = response.id;

        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  }



  return (

    
    <Container className="route-container">
      {productsAdded.map((product) => (
        <div className="product-car">
          <img src={product.image} />
          <br />
          <span>Nombre: {product.title}</span>
          <br />
          <span>Cantidad: {product.quantity}</span>
          <br />
          <span>Precio: {product.precio} </span>
        </div>
      ))}

      <Button variant="dark" style={{ textDecoration: "none" }} onClick={clearCart}>Vaciar Carrito</Button>


      <NavLink to={"/checkout"}><Button variant="dark" style={{ textDecoration: "none" }}>Checkout</Button></NavLink>


    </Container>
  );
}

export default CartComponent;