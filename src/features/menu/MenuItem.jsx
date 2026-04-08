import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import { addToCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl, id } = pizza;
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
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
    <li className="mx-4 flex justify-between gap-10 border-b border-stone-500 py-2">
      <img className="h-auto w-32 rounded-2xl" src={imageUrl} alt="" />
      <div className="relative flex w-full flex-col items-start justify-between gap-2">
        <p className="font-semibold uppercase">{name}</p>
        <p className="w-1/3 text-sm text-stone-700 capitalize">
          {ingredients.map((ingredient) => (
            <span>{ingredient} </span>
          ))}
        </p>
        <div className="flex w-full items-center justify-between">
          <span className="text-xs font-semibold">
            {soldOut ? "SOLDOUT" : `Price: $${unitPrice.toFixed(2)}`}
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
