import CartItem from "./CartItem";

function CartOverview({ cart }) {
  return (
    <ul>
      {cart.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
    </ul>
  );
}

export default CartOverview;
