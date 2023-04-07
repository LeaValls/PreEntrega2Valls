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
        const find = itemsAdded.filter((item) => item.id !== id);
		setItemsAdded(find);
    };
    const clearCart = () => {
		setItemsAdded([]);
	};

    function isInCart(product) {
        return productsAdded.some((productsAdded) => productsAdded.id === product.id);
    };

    return (
        <Context.Provider value={{ productsAdded, onAdd }}>
            {children}
        </Context.Provider>
    );
}