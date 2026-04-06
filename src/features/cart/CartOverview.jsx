import CartItem from "./CartItem";

function CartOverview({ cart }) {
  return (
    <ul className="flex flex-col gap-4 divide-y divide-stone-300 border-b border-stone-300">
      {cart.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
    </ul>
  );
}

export default CartOverview;
