import ItemCart  from "../ItemCart";

const CartList = ({ products }) => {
  return products.map((product) => (
    <ItemCart id={product.id} key={product.id} product={product} />
  ));
};

export default CartList;