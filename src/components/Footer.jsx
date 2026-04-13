import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { getCart } from "../features/cart/cartSlice";
import { convertToPKR } from "../utilis/currencySlice";

function Footer() {
  const cart = useSelector(getCart);
  const location = useLocation();

  const menuFooter = ["/menu"];
  const shoViewCart = menuFooter.includes(location.pathname);
  // console.log(shoViewCart);
  const cartTotalQuantity = cart.reduce(
    (quantity, pizza) => quantity + pizza.quantity,
    0,
  );
  const cartTotalPrice = cart.reduce(
    (price, pizza) => price + pizza.totalPrice,
    0,
  );

  // const ratePKR = useSelector(getRate);
  // const amountInRs = Math.floor(cartTotalPrice * ratePKR);
  const amountInRs = useSelector(convertToPKR(cartTotalPrice));

  if (!cart.length) {
    return null;
  }

  return (
    <div className="border-burnt-peach-700 bg-burnt-peach-800 text-md text-golden-sand-100 flex items-center justify-between border-t-2 px-4 py-4 font-semibold tracking-wider">
      <div>
        <span> {cartTotalQuantity} items | </span>
        <span>Rs {amountInRs.toLocaleString("en-PK")}</span>
      </div>
      {shoViewCart ? (
        <Link to="/cart">
          <div className="text-golden-sand-200 hover:text-golden-sand-400 flex items-center gap-2 transition-colors duration-200">
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <span>View Cart</span>
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/order">
          <div className="text-golden-sand-200 hover:text-golden-sand-400 flex items-center gap-2 transition-colors duration-200">
            <div className="flex items-center justify-center gap-2">
              <span>Checkout</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
              </svg>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
export default Footer;
