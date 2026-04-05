import Button from "../../components/Button";

function CartItem({ cart }) {
  const { name, unitPrice, ingredients, quantity } = cart;
  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>

      {/* <p>{ingredients.join(", ")}</p> */}
      <span>{unitPrice * quantity}$</span>
      <Button>Delete</Button>
    </li>
  );
}

export default CartItem;
