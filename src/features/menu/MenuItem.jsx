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
    <li className="border-slate-blue-600 mx-4 flex justify-between gap-10 border-b py-2">
      <img
        className={`h-auto w-32 rounded-2xl ${soldOut ? "opacity-50 grayscale" : ""}`}
        src={imageUrl}
        alt=""
      />
      <div className="relative flex w-full flex-col items-start justify-between gap-2">
        <p className="text-slate-blue-50 font-semibold uppercase">{name}</p>
        <p className="text-slate-blue-300 w-1/3 text-sm capitalize">
          {ingredients.map((ingredient) => (
            <span>{ingredient} </span>
          ))}
        </p>
        <div className="flex w-full items-center justify-between">
          <span className="text-slate-blue-400 text-xs font-semibold">
            {soldOut ? (
              <span className="text-slate-blue-600 uppercase">Sold Out</span>
            ) : (
              `Price: $${unitPrice.toFixed(2)}`
            )}
          </span>
        </div>

        <span className="absolute top-1/2 right-4 -translate-y-1/2">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </span>
      </div>
    </li>
  );
}
export default MenuItem;
