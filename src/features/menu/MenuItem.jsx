import Button from "../../components/Button";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, ingredients, imageUrl } = pizza;

  function addToCart() {}

  return (
    <li>
      <img src={imageUrl} alt="" />
      <div>
        <p>{name}</p>
        <p>
          {ingredients.map((ingredient) => (
            <span>{ingredient} </span>
          ))}
        </p>
        {soldOut ? "SOLDOUT" : <p>{unitPrice}</p>}
        <Button onClick={addToCart}>Add to cart</Button>
      </div>
    </li>
  );
}

export default MenuItem;
