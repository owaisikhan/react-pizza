import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const userName = useSelector(getUsername);
  function handleOrder() {
    navigate("/order");
  }

  return (
    <div className="mx-auto mt-8 max-w-6/10 pb-10 md:max-w-6/10">
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
            <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
