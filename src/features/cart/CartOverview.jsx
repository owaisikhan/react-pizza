import { ClipLoader, DotLoader } from "react-spinners";

import CartItem from "./CartItem";

import useGetCart from "./useGetCart";

function CartOverview() {
  // getCart().then((data) => console.log(data));

  //custom hook here
  const { cart, isLoading } = useGetCart();
  // console.log(cart);
  //sort the cart on id column in ascending order
  const sortedCart = cart?.sort((a, b) => a.id - b.id);
  // console.log(sortedCart);
  if (isLoading)
    return <DotLoader color="#b9215f" size={90} speedMultiplier={1} />;

  return (
    <ul className="divide-golden-sand-200 border-golden-sand-300 flex flex-col gap-2 divide-y border-b">
      {sortedCart?.map((item) => (
        <CartItem key={item.id} cart={item} />
      ))}
    </ul>
  );
}

export default CartOverview;
