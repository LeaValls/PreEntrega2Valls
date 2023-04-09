import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {

    const [productsAdded, setProductsAdded] = useState([]);
    function onAdd(product, quantity) {
        const isAlreadyAdded = isInCart(product);

        if (isAlreadyAdded) {
            const productModify = productsAdded.find((productsAdded) => productsAdded.id === product.id);

            const productModified = {
                ...productModify,
                quantity: productModify.quantity + quantity
            };

            setProductsAdded((prevState) => prevState.map((productsAdded) => productsAdded.id === product.id ? productModified : productsAdded));

        } else {
            setProductsAdded((prevState) => prevState.concat({ ...product, quantity }));
        }
    }

    

    const removeItem = (itemId) => {
        const removeProduct = productsAdded.filter(
          (productsAdded) => productsAdded.id !== itemId.id
        );
        setProductsAdded([...removeProduct]);
      };
    const clearCart = () => {
		setItemsAdded([]);
	};

    function isInCart(product) {
        return productsAdded.some((productsAdded) => productsAdded.id === product.id);
    };

    const totalPrice = () => {
        const totalPriceProducts = productsAdded.reduce(
          (accum, product) => (accum += product.quantity * product.price),
          0
        );
        return totalPriceProducts;
      };

    return (
        <Context.Provider value={{ productsAdded, onAdd, removeItem, clearCart, totalPrice, }}>
            {children}
        </Context.Provider>
    );
}