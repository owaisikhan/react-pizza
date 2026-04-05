import Button from "../../components/Button";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl } = pizza;

  function addToCart() {}

  return (
    <li className="mx-4 flex justify-between gap-8 py-2">
      <img className="h-auto w-32" src={imageUrl} alt="" />
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
          <Button onClick={addToCart}>Add to cart</Button>
        </span>
      </div>
    </li>
  );
}

export default MenuItem;
