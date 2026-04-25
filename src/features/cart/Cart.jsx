import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
// import { clearCart, getCart } from "./cartSlice";

const cart = [];

function Cart() {
  const navigate = useNavigate();

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

      {2 > 3 ? (
        <>
          <p>Please add pizza to your cart before ordering!</p>
        </>
      ) : (
        <>
          <CartOverview />
          <div className="mt-8 flex justify-between">
            <Button onClick={handleOrder}>Order Now</Button>
            <Button>Clear Cart</Button>
          </div>
        </>
      )}
      <div className="mt-8">
        <Button to="/menu" type="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>{" "}
          <span>Back to Menu</span>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
