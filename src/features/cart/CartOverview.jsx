import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "./cartSlice";

function CartOverview() {
  const cart = useSelector(getCart);

  console.log(cart.length);
  return (
    <ul className="divide-golden-sand-200 border-golden-sand-300 flex flex-col gap-2 divide-y border-b">
      {cart.map((item) => (
        <CartItem cart={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CartOverview;
