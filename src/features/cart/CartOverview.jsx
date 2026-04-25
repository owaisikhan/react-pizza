import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ClipLoader, DotLoader } from "react-spinners";
import CartItem from "./CartItem";
import { getCart } from "../../services/apiCart";
import useGetCart from "./useGetCart";

// cart

// const cart = [
//   {
//     pizzaId: 1,
//     name: "Margherita",
//     quantity: 2,
//     unitPrice: 11,
//   },
// ];

function CartOverview() {
  // getCart().then((data) => console.log(data));

  //custom hook here
  const { cart, isLoading } = useGetCart();

  if (isLoading)
    return <DotLoader color="#b9215f" size={90} speedMultiplier={1} />;

  return (
    <ul className="divide-golden-sand-200 border-golden-sand-300 flex flex-col gap-2 divide-y border-b">
      {cart?.map((item) => (
        <CartItem key={item.pizzaId} cart={item} />
      ))}
    </ul>
  );
}

export default CartOverview;
