import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Button from "../../components/Button";
import UpdateQuantity from "../../components/UpdateQuantity";

import { getCartRow } from "../../services/apiCart";
import { useAddToCart } from "./useAddToCart";
import { DotLoader } from "react-spinners";
import { convertToPKR } from "../../utilis/currencySlice";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl, id } = pizza;

  const { data, isPending } = useQuery({
    queryKey: [`pizza: ${name}`],
    queryFn: () => getCartRow(name),
  });

  const ItemQuantity = data?.quantity ?? 0;

  const { addToCart, isPending: isAddingToCart, error } = useAddToCart();

  const amountInRs = useSelector(convertToPKR(unitPrice));
  function handleAddToCart() {
    addToCart({ name, quantity: 1, unitPrice: amountInRs, id });
  }

  // if (isPending) {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <DotLoader />
  //     </div>
  //   );
  // }

  if (error) {
    return <Error />;
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
            <Button disabled={isAddingToCart} onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
          {ItemQuantity > 0 && (
            <div className="flex items-center gap-2 p-3.5 font-bold">
              <UpdateQuantity name={name} ItemQuantity={ItemQuantity} />
            </div>
          )}
        </span>
      </div>
    </li>
  );
}
export default MenuItem;
