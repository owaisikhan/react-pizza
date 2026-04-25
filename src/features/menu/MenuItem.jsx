import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";

import Button from "../../components/Button";
import useGetCart from "../cart/useGetCart";

import { convertToPKR } from "../../utilis/currencySlice";
import { useUpdateQuantity } from "./useUpdateQuantity";
import { getCartRow } from "../../services/apiCart";
import { useDeleteRow } from "./useDeleteRow";

function MenuItem({ pizza }) {
  const { cart } = useGetCart();

  const { name, unitPrice, soldOut, ingredients, imageUrl, id } = pizza;
  // const cart = useSelector((state) => state.cart.cart);
  // const dispatch = useDispatch();
  //  const ItemQuantity = useSelector(getItemQuantity(id));

  const { data, isPending } = useQuery({
    queryKey: [`pizza: ${name}`],
    queryFn: () => getCartRow(name),
  });

  const ItemQuantity = data?.quantity ?? 0;

  // not useful
  const isAlreadyInCart =
    cart?.filter((item) => item.name === name)[0]?.quantity > 0;

  function handleAddToCart() {
    //  "pizzaId": 1,
    //   "name": "Margherita",
    //   "quantity": 2,
    //   "unitPrice": 12,
    //   "totalPrice": 24
    // const newItem = {
    //   pizzaId: id,
    //   name,
    //   quantity: 1,
    //   unitPrice,
    //   totalPrice: unitPrice * 1,
    // };
  }

  const amountInRs = useSelector(convertToPKR(unitPrice));

  //add custom Hook
  const { updatePizzaQuantity, isUpdating } = useUpdateQuantity(name);

  // create a mutation for deleteing a row from cart table and then call it in the handle decrement function when quantity is 0 and also invalidate the query for that pizza in the on success of the mutat
  const { deletePizzaRow } = useDeleteRow(name);

  function handleIncrement() {
    updatePizzaQuantity({ name, quantity: ItemQuantity + 1 });
  }
  function handleDecrement() {
    if (ItemQuantity === 1) {
      // call the delete function in api cart when quantity is 0
      deletePizzaRow(name);
    } else {
      updatePizzaQuantity({ name, quantity: ItemQuantity - 1 });
    }
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
                Rs. {amountInRs.toLocaleString("en-PK")}
              </span>
            )}
          </span>
        </div>
        <span className="absolute top-1/2 right-4 -translate-y-1/2">
          {!soldOut && ItemQuantity === 0 && (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
          {ItemQuantity > 0 && (
            <div className="flex items-center gap-2 p-3.5 font-bold">
              <Button
                disabled={isUpdating}
                type="small"
                onClick={handleIncrement}
              >
                +
              </Button>

              {ItemQuantity}
              <Button
                disabled={isUpdating}
                onClick={handleDecrement}
                type="small"
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
