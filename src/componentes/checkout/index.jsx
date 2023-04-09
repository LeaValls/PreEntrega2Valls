import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "react-bootstrap";
import "./checkout.css";



import Cart from "../Cart";
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";






const CheckoutComponent = () => {
  const { productsAdded } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const db = getFirestore();

  
  

  

  const updateOrder = (productId, finalStock) => {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  };

  const sendOrder = () => {
    const totalPrice = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const newOrder = {
      name,
      email,
      phone,
      items: productsAdded,
      total: totalPrice,
    };

    const collectionRef = collection(db, "orders");

    if (isNaN(phone)) {
      MySwal.fire({
        title: <p className="itemCount-error">Numero Invalido</p>,
      });
      return;
    }

    addDoc(collectionRef, newOrder)
      .then((response) => {
        const orderId = response.id;
        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <Cart />
      <div className="payment">
        <div className="payment-logo">
          
        </div>

        <h1 className="text-xl">CHECKOUT</h1>
        <div className="form">
          <div className="card space icon-relative">
            <label className="label">Name</label>
            <input
              type="text"
              id="Name"
              className="input"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <form onSubmit={handleSubmit}>
              <div className="card space icon-relative">
                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  id="Email"
                  className="input"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="card space icon-relative">
                <label className="label">Phone</label>
                <input
                  required
                  type="tel"
                  id="tel"
                  className="input"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div onClick={sendOrder} className="btn-container">
                
              </div>
              <br />

              <div className="buttonOrder" >             
              <Button variant="dark" style={{ textDecoration: "none", color: "ligth"}} onClick={ sendOrder }>Pagar</Button>
              </div> 

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;