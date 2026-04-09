import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import { addToCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl, id } = pizza;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(newItem));
  }

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
                ${unitPrice.toFixed(2)}
              </span>
            )}
          </span>
        </div>
        <span className="absolute top-1/2 right-4 -translate-y-1/2">
          {!soldOut && <Button onClick={handleAddToCart}>Add to cart</Button>}
        </span>
      </div>
    </li>
  );
}
export default MenuItem;
