import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import {
  addToCart,
  decreaseQuantity,
  getItemQuantity,
  increaseQuantity,
} from "../cart/cartSlice";
import { convertToPKR } from "../../utilis/currencySlice";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl, id } = pizza;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const ItemQuantity = useSelector(getItemQuantity(id));

  function handleAddToCart() {
    //  "pizzaId": 1,
    //   "name": "Margherita",
    //   "quantity": 2,
    //   "unitPrice": 12,
    //   "totalPrice": 24
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(newItem));
  }

  const isAlreadyInCart = cart.filter((item) => item.pizzaId === id).length > 0;

  const amountInRs = useSelector(convertToPKR(unitPrice));

  return (
    <li className="border-golden-sand-200 mx-4 flex justify-between gap-10 border-b py-4">
      <img
        className={`h-auto w-32 rounded-2xl ${soldOut ? "opacity-50 grayscale" : ""}`}
        src={imageUrl}
        alt=""
      />
      <div className="relative flex w-full flex-col items-start justify-between gap-2">
        <p className="text-mauve-bark-900 font-semibold uppercase">{name}</p>
        <p className="text-mauve-bark-500 w-1/3 text-sm capitalize">
          {ingredients.map((ingredient) => (
            <span key={ingredient}>{ingredient} </span>
          ))}
        </p>
        <div className="flex w-full items-center justify-between">
          <span className="text-xs font-semibold">
            {soldOut ? (
              <span className="bg-mauve-bark-200 text-mauve-bark-700 rounded-full px-3 py-1 text-xs uppercase">
                Sold Out
              </span>
            ) : (
              <span className="bg-golden-sand-100 text-golden-sand-700 rounded-full px-3 py-1 text-xs">
                Rs. {amountInRs.toLocaleString("en-PK")}
              </span>
            )}
          </span>
        </div>
        <span className="absolute top-1/2 right-4 -translate-y-1/2">
          {!soldOut && !isAlreadyInCart && ItemQuantity === 0 && (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
          {isAlreadyInCart && ItemQuantity > 0 && (
            <div className="flex items-center gap-2 p-3.5 font-bold">
              <Button
                type="small"
                onClick={() => dispatch(increaseQuantity(id))}
              >
                +
              </Button>

              {ItemQuantity}
              <Button
                type="small"
                onClick={() => dispatch(decreaseQuantity(id))}
              >
                -
              </Button>
            </div>
          )}
        </span>
      </div>
    </li>
  );
}
export default MenuItem;
