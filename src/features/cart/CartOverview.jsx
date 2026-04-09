import CartItem from "./CartItem";

function CartOverview({ cart }) {
  return (
    <ul className="divide-golden-sand-200 border-golden-sand-300 flex flex-col gap-2 divide-y border-b">
      {cart.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
    </ul>
  );
}

export default CartOverview;
