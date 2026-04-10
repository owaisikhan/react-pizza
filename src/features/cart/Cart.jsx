import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";
import { useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { getCart } from "./cartSlice";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  const userName = useSelector(getUsername);
  function handleOrder() {
    navigate("/order");
  }

  function handleClearCart() {
    console.log("Cart cleared");
  }

  return (
    <div className="bg-golden-sand-50 mx-auto mt-8 min-h-full max-w-6/10 pb-10 md:max-w-6/10">
      <p className="text-mauve-bark-900 mb-6 text-2xl font-bold">
        Your Cart, {userName}
      </p>

      {!cart.length ? (
        <p>Please add pizza to your cart before ordering!</p>
      ) : (
        <>
          <CartOverview />
          <div className="mt-8 flex justify-between">
            <Button onClick={handleOrder}>Order Now</Button>
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
