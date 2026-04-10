import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  decreaseQuantity,
  deleteItem,
  getItemQuantity,
  increaseQuantity,
} from "./cartSlice";
import { convertToPKR } from "../../utilis/currencySlice";

function CartItem({ cart }) {
  const { name, quantity, unitPrice, pizzaId } = cart;

  const dispatch = useDispatch();
  const itemQuantity = useSelector(getItemQuantity(cart.pizzaId));

  const amountInRs = useSelector(convertToPKR(unitPrice * quantity));

  return (
    <li className="flex items-center justify-between py-3">
      <p className="text-mauve-bark-900 font-medium">
        {quantity}&times; {name}
      </p>
      <span className="text-burnt-peach-600 text-sm font-semibold">
        Rs {amountInRs.toLocaleString("en-PK")}
      </span>
      <div className="flex items-center gap-2">
        <Button
          type="small"
          onClick={() => dispatch(increaseQuantity(pizzaId))}
        >
          +
        </Button>

        {itemQuantity}
        <Button
          type="small"
          onClick={() => dispatch(decreaseQuantity(pizzaId))}
        >
          -
        </Button>
        <Button type="none" onClick={() => dispatch(deleteItem(pizzaId))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="rgb(92, 25, 10)"
            className="ml-4"
          >
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
          </svg>
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
